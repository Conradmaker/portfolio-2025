'use client';
import Svg from '@/components/ui/svg';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';
import { FlipWords } from './ui/filp-words';
import { AspectRatio } from './ui/aspect-ratio';
import { useUiStore } from '@/modules/zustand/ui';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useUiStore();
  const { scrollY } = useScroll({
    target: containerRef,
  });
  const heroScale = useTransform(scrollY, [0, 500, 700], [1, 0.9, 0.85]);
  const heroScaleMobile = useTransform(scrollY, [0, 500, 700], [1, 0.75, 0.6]);
  const heroY = useTransform(scrollY, [0, 800], [0, 800]);
  return (
    <>
      <section id="about" className="max-w-[1632px] px-3 md:px-4 mx-auto" ref={containerRef}>
        <motion.div
          style={{ scale: isMobile ? heroScaleMobile : heroScale, y: heroY }}
          className="mb-4 max-h-[760px] w-full bg-[#F7F8FA] rounded-2xl relative transition-all duration-[0.025s]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-center h-full lg:pl-14">
            <div className="px-6 py-9 lg:px-0 lg:py-0 space-y-4 lg:space-y-20 lg:flex-1">
              <h1 className="text-[8vw] sm:text-6xl md:text-7xl lg:text-5xl xl:text-8xl font-semibold sm:font-medium leading-tight">
                안녕하세요.
                <br />
                <FlipWords
                  words={[
                    '제너럴리스트',
                    '창의적인',
                    '진짜 풀스택',
                    'AI개발을 겸비한',
                    '기획력 있는',
                    '디자인에 민감한',
                  ]}
                  duration={1200}
                  className="text-blue-800 -translate-x-2.5 md:-translate-x-0"
                />
                <br />
                개발자 유원근입니다.
              </h1>
              <p className="pb-5 lg:pb-0 lg:pl-2 text-sm lg:text-xl text-foreground/60 leading-[1.75]">
                저는 풀스택 개발자로서 <br />
                프론트엔드, 백엔드를 아울러 창의적인 문제 해결과 <br />
                고객과 팀의 요구를 충족시키는 데 최선을 다할 것입니다.
              </p>
            </div>
            <ul className="grid h-full grid-cols-3 grid-rows-2 lg:grid-cols-2 lg:grid-rows-3 w-full lg:max-w-[504px]">
              <AspectRatio ratio={1 / 1} className="">
                <li className="h-full">
                  <Svg.Hero3 className="max-w-full max-h-full" />
                </li>
              </AspectRatio>
              <AspectRatio ratio={1 / 1} className="">
                <li className="h-full">
                  <Svg.Hero4 className="max-w-full max-h-full" color="#000" />
                </li>
              </AspectRatio>
              <AspectRatio ratio={1 / 1} className="">
                <li className="h-full">
                  <Svg.Hero5 className="max-w-full max-h-full" color="#000" />
                </li>
              </AspectRatio>
              <AspectRatio ratio={1 / 1} className="order-3">
                <li className="h-full">
                  <Svg.Hero2 className="max-w-full max-h-full" />
                </li>
              </AspectRatio>
              <AspectRatio ratio={1 / 1} className="order-2">
                <li className="h-full">
                  <Svg.Hero1 className="max-w-full max-h-full" />
                </li>
              </AspectRatio>
              <AspectRatio ratio={1 / 1} className="">
                <li className="h-full">
                  <Svg.Hero6 className="max-w-full max-h-full" color="#000" />
                </li>
              </AspectRatio>
            </ul>
          </div>
        </motion.div>
      </section>
    </>
  );
}
