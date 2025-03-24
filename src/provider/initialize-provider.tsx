'use client';
import { useUiStore } from '@/modules/zustand/ui';
import React, { useEffect } from 'react';

export default function InitializeProvider() {
  const { setViewPort } = useUiStore();
  useEffect(() => {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    setViewPort({ w: innerWidth, h: innerHeight });
  }, []);
  return <></>;
}
