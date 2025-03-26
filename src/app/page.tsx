import React from 'react';
import Skills from '@/components/Skills';
import Merit from '@/components/Merit';
import Process from '@/components/Process';
import Work from '@/components/Work';
import Hero from '@/components/Hero';

export default function Page() {
  return (
    <main className="w-full relative z-20 bg-white antialiased">
      <Hero />
      <Merit />
      <Process />
      <Skills />
      <Work />
    </main>
  );
}
