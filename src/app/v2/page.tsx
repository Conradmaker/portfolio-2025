import React from 'react';
import Skills from './skills';
import Merit from './Merit';
import Process from './Process';
import Work from './Work';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full relative z-20 bg-white antialiased">
        <Hero />
        <Merit />
        <Process />
        <Skills />
        <Work />
        <Footer />
      </main>
    </>
  );
}
