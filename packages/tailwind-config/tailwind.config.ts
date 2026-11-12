import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    '../../apps/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocop: {
          primary: '#012d1d',
          secondary: '#984724',
          tertiary: '#372200',
          gold: '#C89B3C',
          surface: '#f9f9ff',
          warmWhite: '#F8F5EE',
          softGreen: '#E8EFEA',
          darkGreen: '#1F4D3A',
        },
        // Semantic color aliases - with actual values for opacity modifiers
        brand: {
          primary: '#012d1d',
          secondary: '#984724',
          tertiary: '#372200',
          gold: '#C89B3C',
        },
        surface: {
          DEFAULT: '#f9f9ff',
          elevated: '#ffffff',
          sunken: '#f0f0f5',
        },
        text: {
          primary: '#1a1a2e',
          secondary: '#4a4a68',
          muted: '#8888a0',
          inverse: '#ffffff',
        },
        border: {
          DEFAULT: '#e0e0eb',
          focus: '#012d1d',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-be-vietnam-pro)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'var(--font-noto-serif)',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        display: [
          'var(--font-be-vietnam-pro)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'var(--font-jetbrains-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-md': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: '600' }],
        'heading-xl': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-lg': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.35', fontWeight: '600' }],
        'heading-md': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.45', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
        'body-md': ['1rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.015em' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.03em', fontWeight: '500' }],
      },
      spacing: {
        'space-4xs': '0.125rem', // 2px
        'space-3xs': '0.25rem',  // 4px
        'space-2xs': '0.375rem', // 6px
        'space-xs': '0.5rem',    // 8px
        'space-sm': '0.75rem',   // 12px
        'space-md': '1rem',      // 16px
        'space-lg': '1.5rem',    // 24px
        'space-xl': '2rem',      // 32px
        'space-2xl': '3rem',     // 48px
        'space-3xl': '4rem',     // 64px
        'space-4xl': '6rem',     // 96px
        'space-5xl': '8rem',     // 128px
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',    // 4px
        DEFAULT: '0.5rem', // 8px
        md: '0.75rem',    // 12px
        lg: '1rem',       // 16px
        xl: '1.5rem',     // 24px
        '2xl': '2rem',    // 32px
        full: '9999px',
      },
      boxShadow: {
        'shadow-xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'shadow-sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'shadow-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'shadow-inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'shadow-brand': '0 4px 14px 0 rgb(1 45 29 / 0.15)',
        'shadow-gold': '0 4px 14px 0 rgb(200 155 60 / 0.3)',
      },
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'fade-out': 'fadeOut 300ms ease-in',
        'slide-up': 'slideUp 400ms ease-out',
        'slide-down': 'slideDown 400ms ease-out',
        'slide-left': 'slideLeft 400ms ease-out',
        'slide-right': 'slideRight 400ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
        'scale-out': 'scaleOut 200ms ease-in',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)',
        'gradient-gold': 'linear-gradient(135deg, var(--color-brand-gold) 0%, #e8b95e 100%)',
        'gradient-surface': 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(1, 45, 29, 0.9) 0%, rgba(55, 34, 0, 0.8) 100%)',
        'pattern-dots': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        'pattern-grid': 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
      },
      backgroundSize: {
        'pattern-dots': '24px 24px',
        'pattern-grid': '24px 24px',
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'dropdown': '1000',
        'sticky': '1100',
        'modal': '1200',
        'popover': '1300',
        'tooltip': '1400',
        'toast': '1500',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;