'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { clsx } from '../lib/utils';

interface MapMarker {
  id: string;
  name: string;
  position: { lat: number; lng: number };
  type: 'destination' | 'craft-village' | 'eco-tour' | 'province';
  data: Record<string, unknown>;
}

interface MapComponentProps {
  initialCenter: { lat: number; lng: number };
  initialZoom?: number;
  markers: MapMarker[];
  onMarkerClick?: (marker: MapMarker) => void;
  onBoundsChange?: (bounds: { north: number; south: number; east: number; west: number }) => void;
  className?: string;
  style?: React.CSSProperties;
  height?: string;
}

export function MapComponent({
  initialCenter,
  initialZoom = 6,
  markers = [],
  onMarkerClick,
  onBoundsChange,
  className,
  style,
  height = '500px',
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const initializeMap = useCallback(async () => {
    if (!mapRef.current || mapInstanceRef.current || isLoaded) return;

    try {
      // Check if Google Maps API is loaded
      if (typeof window.google === 'undefined' || !window.google.maps) {
        await loadGoogleMapsAPI();
      }

      const { Map, Marker, InfoWindow, LatLngBounds } = window.google.maps;

      const map = new Map(mapRef.current, {
        center: initialCenter,
        zoom: initialZoom,
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
        gestureHandling: 'cooperative',
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      });

      mapInstanceRef.current = map;
      infoWindowRef.current = new InfoWindow();

      // Add markers
      const bounds = new LatLngBounds();
      bounds.extend(initialCenter);

      markers.forEach((markerData) => {
        const position = new window.google.maps.LatLng(markerData.position.lat, markerData.position.lng);
        bounds.extend(position);

        const marker = new Marker({
          position,
          map,
          title: markerData.name,
          icon: getMarkerIcon(markerData.type),
        });

        marker.addListener('click', () => {
          if (infoWindowRef.current) {
            infoWindowRef.current.setContent(createInfoContent(markerData));
            infoWindowRef.current.open(map, marker);
          }
          onMarkerClick?.(markerData);
        });

        markersRef.current.push(marker);
      });

      // Fit bounds if there are markers
      if (markers.length > 0) {
        map.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
      }

      // Bounds change listener
      map.addListener('bounds_changed', () => {
        const bounds = map.getBounds();
        if (bounds && onBoundsChange) {
          onBoundsChange({
            north: bounds.getNorthEast().lat(),
            south: bounds.getSouthWest().lat(),
            east: bounds.getNorthEast().lng(),
            west: bounds.getSouthWest().lng(),
          });
        }
      });

      setIsLoaded(true);
    } catch (error) {
      console.error('Failed to initialize map:', error);
      setLoadError('Không thể tải bản đồ. Vui lòng thử lại sau.');
    }
  }, [initialCenter, initialZoom, markers, onMarkerClick, onBoundsChange, isLoaded]);

  useEffect(() => {
    initializeMap();

    return () => {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [initializeMap]);

  // Update markers when they change
  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded) return;

    // Remove old markers
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // Add new markers
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(initialCenter);

    markers.forEach((markerData) => {
      const position = new window.google.maps.LatLng(markerData.position.lat, markerData.position.lng);
      bounds.extend(position);

      const marker = new window.google.maps.Marker({
        position,
        map: mapInstanceRef.current,
        title: markerData.name,
        icon: getMarkerIcon(markerData.type),
      });

      marker.addListener('click', () => {
        if (infoWindowRef.current) {
          infoWindowRef.current.setContent(createInfoContent(markerData));
          infoWindowRef.current.open(mapInstanceRef.current!, marker);
        }
        onMarkerClick?.(markerData);
      });

      markersRef.current.push(marker);
    });

    if (markers.length > 0) {
      mapInstanceRef.current.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
    }
  }, [markers, initialCenter, onMarkerClick, isLoaded]);

  if (loadError) {
    return (
      <div
        className={clsx('flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-2xl', className)}
        style={{ ...style, height }}
        role="alert"
      >
        <div className="text-center p-8">
          <span className="material-symbols-outlined text-6xl text-neutral-400 dark:text-neutral-500 mb-4 block">map</span>
          <p className="text-neutral-600 dark:text-neutral-400">{loadError}</p>
          <button
            onClick={() => {
              setLoadError(null);
              setIsLoaded(false);
              initializeMap();
            }}
            className="mt-4 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className={clsx('rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800', className)}
      style={{ ...style, height, minHeight: height }}
      role="application"
      aria-label="Bản đồ tương tác OCOP Việt Nam"
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-3 border-primary-600 border-t-transparent mx-auto mb-3" />
            <p className="text-neutral-600 dark:text-neutral-400">Đang tải bản đồ...</p>
          </div>
        </div>
      )}
    </div>
  );
}

function getMarkerIcon(type: MapMarker['type']): google.maps.Icon {
  const colors = {
    destination: '#2563EB', // blue-600
    'craft-village': '#F59E0B', // amber-500
    'eco-tour': '#10B981', // emerald-500
    province: '#EF4444', // red-500
  };

  const color = colors[type];
  
  return {
    path: 'M 0 0 C -24 0 -24 -36 0 -36 C 24 -36 24 0 0 0 Z',
    fillColor: color,
    fillOpacity: 1,
    strokeColor: '#FFFFFF',
    strokeWeight: 2,
    scale: 1.2,
    anchor: new window.google.maps.Point(0, 36),
  } as unknown as google.maps.Icon;
}

function createInfoContent(marker: MapMarker): string {
  const typeLabels = {
    destination: 'Điểm du lịch',
    'craft-village': 'Làng nghề',
    'eco-tour': 'Tour sinh thái',
    province: 'Tỉnh/Thành phố',
  };

  return `
    <div style="padding: 8px; min-width: 200px; font-family: 'Be Vietnam Pro', sans-serif;">
      <h4 style="margin: 0 0 8px; font-size: 16px; font-weight: 600; color: #111827;">${marker.name}</h4>
      <p style="margin: 0 0 8px; font-size: 12px; color: #6B7280; background: #F3F4F6; padding: 4px 8px; border-radius: 4px; display: inline-block;">
        ${typeLabels[marker.type]}
      </p>
      ${marker.data.description ? `<p style="margin: 8px 0 0; font-size: 13px; color: #374151; line-height: 1.4;">${marker.data.description}</p>` : ''}
    </div>
  `;
}

async function loadGoogleMapsAPI(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window.google !== 'undefined' && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&libraries=marker&v=weekly&language=vi&region=VN`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps API'));
    document.head.appendChild(script);
  });
}

// Type augmentation for Google Maps
declare global {
  interface Window {
    google: {
      maps: typeof google.maps;
    };
  }
}