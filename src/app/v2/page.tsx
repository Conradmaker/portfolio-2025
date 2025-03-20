import React from 'react';
import Hero from './Hero';
import Skills from './skills';
import Merit from './Merit';
import Process from './Process';
import Work from './Work';

export default function Page() {
  return (
    <>
      <main className="w-full relative z-20 bg-white antialiased">
        <Hero />
        <Merit />
        <Process />
        <Skills />
        <Work />
      </main>
      <footer></footer>
    </>
  );
}
