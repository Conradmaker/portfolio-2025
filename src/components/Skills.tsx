'use client';

import { useUiStore } from '@/modules/zustand/ui';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';

export default function Skills() {
  const { viewPort } = useUiStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const headingY = useTransform(scrollYProgress, [0, 0.3], ['0', '400px']);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const slideHeight = useTransform(scrollYProgress, [0, 0.3], [520, 700]);
  const slideY = useTransform(scrollYProgress, [0, 0.3], ['0vh', '-18vh']);
  const maxW = useTransform(scrollYProgress, [0, 0.3], [1600, viewPort.w]);
  const marginLeft = useTransform(scrollYProgress, [0, 0.3], [0, (viewPort.w - 1600) / 2]);
  const itemW = useTransform(scrollYProgress, [0, 0.3], [780, 440]);

  const scrollX = useTransform(scrollYProgress, [0.35, 1], [0, -1200]);
  const scrollXMob = useTransform(scrollYProgress, [0.05, 1], ['0%', '-82%']);
  return (
    <section id="skills" ref={containerRef} className="bg-white z-0 relative h-[5000px] mt-60">
      {/* 모바일 */}
      <div className="md:hidden h-screen flex sticky top-0 pt-24 flex-col">
        <div className="flex flex-col gap-4 px-4">
          <h2 className="text-black text-[5.3vw] font-semibold leading-snug">
            다양한 분야에서의 개발 경험과 <br />
            폭넓은 기술 스택을 프로덕트에 녹여냅니다.
          </h2>
          <p className="text-[15px] text-foreground/60 leading-relaxed break-keep">
            웹사이트, 모바일 앱, 브라우저 확장 프로그램부터 백엔드 시스템까지 다양한 플랫폼에서의 개발
            경험을 통해 사용자와 팀의 요구사항을 모두 충족하는 결과물을 만들어냅니다.
          </p>
        </div>
        <motion.div className="flex-1 pt-12 mx-auto flex w-full overflow-hidden [scrollbar-width:none]">
          <motion.ul
            className="flex flex-row justify-start h-4/5 transition-all duration-[0.02s]"
            style={{ x: scrollXMob }}
          >
            {skillSet.map(skills => {
              return (
                <li
                  key={skills.sector}
                  className="w-[80vw] bg-[#F7F8FA] rounded-xl inline-flex flex-col h-full p-6 relative ml-6"
                >
                  <p className="font-semibold text-2xl flex-1">{skills.sector}</p>
                  <div className="rounded-full bg-blue-500 size-5 absolute right-8 top-8" />
                  <ul className="flex flex-wrap gap-x-2 gap-y-4">
                    {skills.stacks.map((stack, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-1.5 bg-white rounded-full text-base font-medium text-foreground/80"
                      >
                        {stack}
                      </li>
                    ))}
                    <li className="px-4 py-1.5 rounded-full text-sm">And More..</li>
                  </ul>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>

      {/* PC */}
      <div className="hidden md:flex h-screen sticky top-0 pt-24 flex-col gap-16">
        <motion.div
          style={{ opacity: headingOpacity, y: headingY, scale: headingScale }}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="text-black text-5xl duration-1000 font-medium leading-tight text-center">
            다양한 분야에서의 개발 경험과 <br />
            폭넓은 기술 스택을 프로덕트에 녹여냅니다.
          </h2>
          <p className="text-xl text-foreground/60 text-center max-w-3xl mt-4">
            웹사이트, 모바일 앱, 브라우저 확장 프로그램부터 백엔드 시스템까지 다양한 플랫폼에서의 개발
            경험을 통해 사용자와 팀의 요구사항을 모두 충족하는 결과물을 만들어냅니다.
          </p>
        </motion.div>
        <motion.div
          style={{ height: slideHeight, y: slideY, maxWidth: maxW }}
          className="mx-auto flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
        >
          <motion.ul className="flex flex-row justify-start gap-8 h-full" style={{ x: scrollX }}>
            {skillSet.map((skills, idx) => {
              return (
                <motion.li
                  key={skills.sector}
                  style={{ width: itemW, marginLeft: idx === 0 ? marginLeft : 0 }}
                  className="bg-[#F7F8FA] rounded-xl inline-flex flex-col h-full p-7 relative"
                >
                  <p className="font-medium text-4xl flex-1">{skills.sector}</p>
                  <div className="rounded-full bg-blue-500 size-7 absolute right-8 top-8" />
                  <ul className="flex flex-wrap gap-x-2 gap-y-4">
                    {skills.stacks.map((stack, idx) => (
                      <li key={idx} className="px-6 py-3 bg-white rounded-full text-xl">
                        {stack}
                      </li>
                    ))}
                    <li className="px-6 py-3 rounded-full text-lg">And More..</li>
                  </ul>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
const skillSet = [
  {
    sector: '웹, 브라우저 익스텐션',
    stacks: [
      'React',
      'Next.js',
      'Vue.js',
      'Web Animations',
      'Chromium Engine (CRX)',
      'Vanila JS',
      'Zustand',
      'Tailwind',
    ],
  },
  {
    sector: '서버',
    stacks: [
      'Nodejs',
      'Fastify',
      'Express.js',
      'Nest.js',
      'Kysely',
      'Prisma',
      'Kafka',
      'Search Engine',
      'Crawling',
      'Serverless',
      'Spring',
      'Rails',
    ],
  },
  {
    sector: '모바일',
    stacks: [
      'React-Native',
      'Code Push',
      'Fastlane',
      'Native App API',
      'Expo',
      'Java',
      'Objective-C',
      'Push Notifications',
    ],
  },
  {
    sector: '데이터베이스',
    stacks: [
      'MySQL, PSQL, ORACLE',
      'MongoDB',
      'PlanetScale, Neon',
      'Vitess',
      'Elastic Search',
      'Redis',
      'AstraDB, CosmosDB',
    ],
  },
  {
    sector: '클라우드, 인프라',
    stacks: [
      'Docker',
      'CI & CD',
      'Git (+Actions)',
      'Azure',
      'GCP',
      'AWS',
      'NCP / NHN',
      'Alibaba',
      'Datadog, NewRelic',
      'Whatap',
    ],
  },
  {
    sector: 'AI',
    stacks: [
      'Personalizer',
      'Hugging Face',
      'Transformer',
      'LLM Finetuning',
      'Computer Vision',
      'Vertex AI',
      'Sagemaker',
      'OpenCV',
    ],
  },
];
