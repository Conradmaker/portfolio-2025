'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const headingY = useTransform(scrollYProgress, [0, 0.3], ['0', '400px']);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const slideHeight = useTransform(scrollYProgress, [0, 0.3], [520, 700]);
  const slideY = useTransform(scrollYProgress, [0, 0.3], ['0vh', '-18vh']);
  const maxW = useTransform(scrollYProgress, [0, 0.3], [1600, window.innerWidth]);
  const marginLeft = useTransform(scrollYProgress, [0, 0.3], [0, (window.innerWidth - 1600) / 2]);
  const itemW = useTransform(scrollYProgress, [0, 0.3], [780, 440]);

  const scrollX = useTransform(scrollYProgress, [0.35, 1], [0, -1200]);
  return (
    <section ref={containerRef} className="bg-white z-0 relative h-[5000px] my-60">
      <div className="h-screen sticky top-0 pt-24 flex-col flex gap-16">
        <motion.div
          style={{ opacity: headingOpacity, y: headingY, scale: headingScale }}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="text-black text-5xl font-medium leading-tight text-center">
            다양한 분야에서의 개발 경험과 <br />
            폭넓은 기술 스택을 프로덕트에 녹여냅니다.
          </h2>
          <p className="text-xl text-foreground/60 text-center max-w-3xl mt-4">
            웹사이트, 모바일 앱, 브라우저 확장 프로그램부터 백엔드 시스템까지 다양한 플랫폼에서의 개발
            경험을 통해 사용자와 비즈니스 요구사항을 모두 충족하는 최적의 솔루션을 제공합니다
          </p>
        </motion.div>
        <motion.div
          style={{ height: slideHeight, y: slideY, maxWidth: maxW }}
          className="mx-auto flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
        >
          <motion.ul className="flex flex-row justify-start gap-8 h-full" style={{ x: scrollX }}>
            <motion.li
              style={{ width: itemW, marginLeft: marginLeft }}
              className="bg-gray-100 rounded-xl inline-flex flex-col h-full p-7 relative"
            >
              <p className="font-medium text-4xl flex-1">웹, 브라우저 익스텐션</p>
              <div className="rounded-full bg-blue-500 size-7 absolute right-8 top-8" />
              <ul className="flex flex-wrap gap-x-2 gap-y-4">
                <li className="px-6 py-3 bg-white rounded-full text-2xl">React</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Next.js</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Vue.js</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Web Animations</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Chromium Engine</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Vanila JS</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Zustand</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Tailwind</li>
              </ul>
            </motion.li>
            <motion.li
              style={{ width: itemW }}
              className="bg-gray-100 rounded-xl inline-flex flex-col h-full p-7 relative"
            >
              <p className="font-medium text-4xl flex-1">서버</p>
              <div className="rounded-full bg-blue-500 size-7 absolute right-8 top-8" />
              <ul className="flex flex-wrap gap-x-2 gap-y-4">
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Nodejs</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Express</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Fastify</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Nestjs</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Ruby on Rails</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Spring</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Crawling</li>
              </ul>
            </motion.li>
            <motion.li
              style={{ width: itemW }}
              className="bg-gray-100 rounded-xl inline-flex flex-col h-full p-7 relative"
            >
              <p className="font-medium text-4xl flex-1">모바일</p>
              <div className="rounded-full bg-blue-500 size-7 absolute right-8 top-8" />
              <ul className="flex flex-wrap gap-x-2 gap-y-4">
                <li className="px-6 py-3 bg-white rounded-full text-2xl">React-Native</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Code Push</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Fastlane</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Native App API</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Expo</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Java</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Objective-C</li>
              </ul>
            </motion.li>
            <motion.li
              style={{ width: itemW }}
              className="bg-gray-100 rounded-xl inline-flex flex-col h-full p-7 relative"
            >
              <p className="font-medium text-4xl flex-1">데이터베이스</p>
              <div className="rounded-full bg-blue-500 size-7 absolute right-8 top-8" />
              <ul className="flex flex-wrap gap-x-2 gap-y-4">
                <li className="px-6 py-3 bg-white rounded-full text-2xl">MySQL / PSQL / ORACLE</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">MongoDB</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">PlanetScale</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Vitess</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Elastic Search</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Redis</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">And</li>
              </ul>
            </motion.li>
            <motion.li
              style={{ width: itemW }}
              className="bg-gray-100 rounded-xl inline-flex flex-col h-full p-7 relative"
            >
              <p className="font-medium text-4xl flex-1">클라우드, 인프라</p>
              <div className="rounded-full bg-blue-500 size-7 absolute right-8 top-8" />
              <ul className="flex flex-wrap gap-x-2 gap-y-4">
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Docker</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">CI & CD</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Git</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Azure</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">GCP</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">AWS</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Naver / NHN</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Alibaba Cloud</li>
              </ul>
            </motion.li>
            <motion.li
              style={{ width: itemW }}
              className="bg-gray-100 rounded-xl inline-flex flex-col h-full p-7 relative"
            >
              <p className="font-medium text-4xl flex-1">AI</p>
              <div className="rounded-full bg-blue-500 size-7 absolute right-8 top-8" />
              <ul className="flex flex-wrap gap-x-2 gap-y-4">
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Personalizer</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">HF</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">Transformer</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">LLM Finetuning</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">OpenCV</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl">AWS</li>
                <li className="px-6 py-3 bg-white rounded-full text-2xl"></li>
              </ul>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
