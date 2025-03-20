'use client';
import { useUiStore } from '@/modules/zustand/ui';
import { LucideX } from 'lucide-react';
import React from 'react';

export default function Header() {
  const { setNavOpen } = useUiStore();

  return (
    <header className="fixed bg-blue-700 w-full h-lvh box-border z-0">
      <div className="flex justify-between items-center h-20 max-w-[1600px] mx-auto relative z-20">
        <div className="text-3xl group/logo cursor-pointer relative">
          <p className="group-hover/logo:text-blue-700 text-white transition-all duration-300 relative z-10">
            Ryuwongeun
          </p>
          <div className="group-hover/logo:w-44 w-0 h-full left-0 top-0 bg-white transition-all duration-300 absolute"></div>
        </div>
        <div className="cursor-pointer pl-4 pb-4" onClick={() => setNavOpen(true)}>
          <LucideX className="text-white size-10" />
        </div>
      </div>
      <div className="fixed pl-4 pb-4 top-6 right-12 cursor-pointer">
        <div className="w-30 h-10 flex items-center justify-center text-lg bg-white rounded-xl">
          Menu
        </div>
      </div>
    </header>
  );
}
