'use client';

import * as React from 'react';
import Lenis from 'lenis';
import { useUiStore } from '@/modules/zustand/ui';

const lenis = new Lenis();
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const { scrollAvailable, setScrollAvailable } = useUiStore();

  React.useEffect(() => {
    setScrollAvailable(true);
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  React.useEffect(() => {
    if (scrollAvailable) lenis.start();
    else lenis.stop();
  }, [scrollAvailable]);

  return <>{children}</>;
}
