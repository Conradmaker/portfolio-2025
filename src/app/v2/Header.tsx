'use client';
import { Button } from '@/components/ui/button';
import Svg from '@/components/ui/svg';
import { useUiStore } from '@/modules/zustand/ui';
import { useScroll, useTransform, motion } from 'motion/react';
import React from 'react';

export default function Header() {
  const { scrollY } = useScroll({});
  const headerBorder = useTransform(scrollY, [750, 800], [0, 1]);
  const { navOpen, setNavOpen } = useUiStore();
  return (
    <motion.header className="w-full sticky top-0 z-30 bg-white/30 backdrop-blur-sm antialiased">
      <div className="flex items-center h-[72px] relative max-w-[1600px] mx-auto w-full justify-between">
        <div className="group/logo text-3xl relative flex items-center cursor-pointer">
          <Svg.Logo className="bg-slate-200/0 w-44" />
          <div className="group-hover/logo:opacity-100 opacity-0 size-7 ml-1 rounded-full bg-blue-700 transition-all duration-300 absolute cursor-pointer"></div>
        </div>
        <div className="text-3xl relative flex gap-2">
          <div className="transition-all cursor-pointer text-sm hover:border border-gray-100 hover:bg-white/60 hover:text-black bg-white/30  text-black/50 w-28 h-10 rounded-xl flex items-center justify-center">
            SCROLL UP
          </div>
          <div className="transition-all cursor-pointer hover:bg-black hover:text-white text-sm bg-black/40 w-28 h-10 rounded-xl text-white flex items-center justify-center">
            MENU
          </div>
          {/* <p
            onClick={() => setNavOpen(!navOpen)}
            className="group-hover/menu:text-white w-20 text-blue-700 transition-all duration-300 relative z-10 cursor-pointer "
          >
            Menu
          </p>
          <div className="group-hover/menu:w-22 w-0 h-9 top-0 right-0 bg-blue-700 transition-all duration-300 absolute cursor-pointer"></div> */}
        </div>
      </div>

      <motion.div className="h-px bg-slate-200 w-full" style={{ opacity: headerBorder }}></motion.div>
    </motion.header>
  );
}
