'use client';
import { FlipWords } from '@/components/ui/hero';
import Svg from '@/components/ui/svg';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
  });
  const heroScale = useTransform(scrollY, [0, 500, 700], [1, 0.9, 0.85]);
  const heroY = useTransform(scrollY, [0, 800], [0, 800]);
  const headerBorder = useTransform(scrollY, [750, 800], [0, 1]);
  return (
    <>
      <motion.header className="w-full sticky top-0 z-10 bg-white/30 backdrop-blur-sm">
        <div className="flex items-center h-[72px] text-3xl group/logo cursor-pointer relative max-w-[1600px] mx-auto w-full">
          <p className="group-hover/logo:text-white text-blue-700 transition-all duration-300 relative z-10">
            Ryuwongeun
          </p>
          <div className="group-hover/logo:w-44 w-0 h-9 left-0 bg-blue-700 transition-all duration-300 absolute"></div>
        </div>
        <motion.div
          className="h-px bg-slate-200 w-full"
          style={{ opacity: headerBorder }}
        ></motion.div>
      </motion.header>
      <section className="max-w-[1600px] mx-auto" ref={containerRef}>
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="h-[760px] w-full bg-gray-100 rounded-xl relative"
        >
          <div className="flex items-center h-full pl-14">
            <div className="space-y-24 flex-1">
              <h1 className="text-8xl font-medium leading-tight">
                안녕하세요.
                <br />
                <FlipWords
                  words={[
                    '제너럴리스트',
                    '창의적인',
                    '진짜 풀스택',
                    'AI도 다룰줄 아는',
                    '기획력 있는',
                    '디자인에 민감한',
                  ]}
                  duration={1200}
                  className="text-blue-800"
                />
                <br />
                개발자 유원근입니다.
              </h1>
              <p className="text-foreground/60">asdasd</p>
            </div>

            <ul className="h-full grid grid-cols-2 grid-rows-3">
              <li className="h-full translate-x-9">
                <Svg.Hero3 className="h-full" />
              </li>
              <li className="h-full">
                <Svg.Hero4 className="h-full translate-x-3" color="#000" />
              </li>
              <li className="h-full">
                <Svg.Hero5 className="h-full translate-x-9" color="#000" />
              </li>
              <li className="h-full">
                <Svg.Hero2 className="h-full translate-x-3" />
              </li>
              <li className="h-full">
                <Svg.Hero1 className="h-full translate-x-9" />
              </li>
              <li className="h-full">
                <Svg.Hero6 className="h-full translate-x-3" color="#000" />
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </>
  );
}
