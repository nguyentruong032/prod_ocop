"use client";

import React, { useState, useRef, useEffect } from "react";

export interface AudioPlayerProps {
  title: string;
  narrator?: string;
  duration?: string;
  audioSrc?: string;
  episodeNumber?: string;
}

export function AudioPlayerClient({
  title,
  narrator = "Ban Biên tập Tạp chí OCOP Việt Nam",
  duration = "14:25",
  audioSrc,
  episodeNumber = "Tập 04",
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(865); // 14:25 in seconds
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setTotalDuration(audio.duration);
      }
    };
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Fallback for autoplay policy or missing mock src
      });
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = Number(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    setIsMuted(newVol === 0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full bg-surface-container-lowest rounded-2xl border border-surface-container/80 shadow-xs p-5 sm:p-6 my-6 flex flex-col gap-4">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioSrc || "https://actions.google.com/sounds/v1/water/rain_heavy.ogg"}
        preload="metadata"
      />

      {/* Header Info */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">
              podcasts
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-secondary text-white text-[11px] font-bold rounded">
                Podcast OCOP
              </span>
              <span className="text-xs font-semibold text-outline">
                {episodeNumber}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-serif text-primary mt-0.5">
              {title}
            </h4>
            <p className="text-xs text-on-surface-variant">
              Giọng đọc: {narrator} • Thời lượng: {duration}
            </p>
          </div>
        </div>
      </div>

      {/* Waveform / Progress Slider */}
      <div className="flex flex-col gap-1.5 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-on-surface-variant w-10">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={totalDuration || 100}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Tua thời gian âm thanh"
            className="flex-1 h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <span className="text-xs font-mono text-on-surface-variant w-10 text-right">
            {formatTime(totalDuration)}
          </span>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between pt-1">
        {/* Play / Skip Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 15);
              }
            }}
            aria-label="Lùi lại 15 giây"
            className="p-1.5 text-on-surface-variant hover:text-primary transition-colors"
            title="Lùi 15s"
          >
            <span className="material-symbols-outlined text-[20px]">
              replay_10
            </span>
          </button>

          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Tạm dừng phát" : "Phát âm thanh"}
            className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = Math.min(
                  totalDuration,
                  audioRef.current.currentTime + 30
                );
              }
            }}
            aria-label="Tua nhanh 30 giây"
            className="p-1.5 text-on-surface-variant hover:text-primary transition-colors"
            title="Tiến 30s"
          >
            <span className="material-symbols-outlined text-[20px]">
              forward_30
            </span>
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIsMuted(!isMuted);
              if (audioRef.current) {
                audioRef.current.muted = !isMuted;
              }
            }}
            aria-label={isMuted ? "Bật âm thanh" : "Tắt tiếng"}
            className="text-on-surface-variant hover:text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMuted || volume === 0 ? "volume_off" : "volume_up"}
            </span>
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            aria-label="Âm lượng"
            className="w-16 sm:w-24 h-1 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayerClient;
