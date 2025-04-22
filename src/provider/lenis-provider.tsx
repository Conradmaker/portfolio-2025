'use client';

import * as React from 'react';
import Lenis from 'lenis';
import { useUiStore } from '@/modules/zustand/ui';

let lenis = typeof window !== 'undefined' ? new Lenis() : null;

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const { scrollAvailable, setScrollAvailable } = useUiStore();

  React.useEffect(() => {
    if (!lenis) lenis = new Lenis();
    setScrollAvailable(true);
    const raf = (time: number) => {
      lenis!.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  React.useEffect(() => {
    if (scrollAvailable) {
      lenis!.start();
      document.body.style.overflow = 'auto';
    } else {
      lenis!.stop();
      document.body.style.overflow = 'hidden';
    }
  }, [scrollAvailable]);

  return <>{children}</>;
}
