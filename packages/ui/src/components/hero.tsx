'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';
import type { HeroData } from '@ocop/shared-types';

interface HeroProps {
  data?: HeroData;
  className?: string;
}

export function Hero({ data, className }: HeroProps) {
  const heroData = data || {
    eyebrow: 'Tạp chí tri thức bản địa & di sản nông thôn',
    headline: 'OCOP Việt Nam',
    description: 'Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ nghề, du lịch nông thôn và dữ liệu hội nhập.',
    ctaPrimary: {
      label: 'Khám phá sản phẩm OCOP',
      href: '/san-pham-ocop',
      variant: 'primary',
    },
    ctaSecondary: {
      label: 'Đọc câu chuyện OCOP',
      href: '/cau-chuyen-ocop',
      variant: 'outline',
    },
    badge: 'Cập nhật mới nhất: 12/2024',
    backgroundImage: '/images/hero-bg.jpg',
  };

  const ctaVariants: Record<string, string> = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/90',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/90',
    text: 'text-brand-primary hover:underline',
  };

  return (
    <section
      className={cn(
        'relative min-h-[90vh] flex items-center justify-center overflow-hidden',
        className
      )}
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      {heroData.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroData.backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 via-brand-tertiary/60 to-brand-secondary/40" />
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse-slow" animation-delay="1s" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {heroData.badge && (
            <div className="mb-6 animate-slide-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-body-sm font-medium">
                <span className="w-2 h-2 bg-brand-gold rounded-full animate-bounce-subtle" />
                {heroData.badge}
              </span>
            </div>
          )}

          {/* Eyebrow */}
          {heroData.eyebrow && (
            <p
              id="hero-eyebrow"
              className={cn(
                'mb-4 text-caption tracking-widest animate-slide-up',
                'text-brand-gold font-semibold'
              )}
            >
              {heroData.eyebrow}
            </p>
          )}

          {/* Headline */}
          <h1
            id="hero-title"
            className={cn(
              'mb-6 animate-slide-up',
              'text-display-md md:text-display-lg lg:text-display-xl font-bold text-white',
              'leading-tight'
            )}
          >
            {heroData.headline}
          </h1>

          {/* Description */}
          {heroData.description && (
            <p
              className={cn(
                'mb-10 max-w-2xl mx-auto animate-slide-up',
                'text-body-lg md:text-display-sm text-white/90',
                'leading-relaxed'
              )}
            >
              {heroData.description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            {heroData.ctaPrimary && (
              <a
                href={heroData.ctaPrimary.href}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-body-lg',
                  'transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-primary',
                  ctaVariants[heroData.ctaPrimary.variant] || ctaVariants.primary
                )}
              >
                {heroData.ctaPrimary.label}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
            {heroData.ctaSecondary && (
              <a
                href={heroData.ctaSecondary.href}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-body-lg',
                  'transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-primary',
                  ctaVariants[heroData.ctaSecondary.variant] || ctaVariants.outline
                )}
              >
                {heroData.ctaSecondary.label}
              </a>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/70 text-body-sm">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                500+ Sản phẩm OCOP
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                63 Tỉnh thành
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                100% Việt Nam
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// Default Hero for pages that don't pass data
export function DefaultHero() {
  return <Hero />;
}