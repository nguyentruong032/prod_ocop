'use client';

import { ReactNode } from 'react';
import { MobileMenuProvider } from './layout/MobileMenuContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MobileMenuProvider>
      {children}
    </MobileMenuProvider>
  );
}
