/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

const data = [
  {
    title: 'REALIZ-FINANCE 웹',
    slug: 'realiz-finance',
    description: '금융시장 리얼타임 데이터 API 스토어',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹', '기획', '디자인'],
  },
  {
    title: 'REALIZ-FINANCE 백엔드',
    slug: 'realiz-finance',
    description: '금융시장 리얼타임 데이터 API 스토어',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['백엔드', 'AI', '기획', '디자인'],
  },
  {
    title: 'REALIZ 웹',
    slug: 'realiz-so',
    description: 'AI 모델 마켓플레이스',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹'],
  },
  {
    title: 'REALIZ 백엔드',
    slug: 'realiz-so',
    description: 'AI 모델 마켓플레이스',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['백엔드', 'AI'],
  },
  {
    title: '턴업 APP',
    slug: 'turn-up',
    description: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '턴업 브라우저 확장 프로그램',
    slug: 'turn-up',
    description: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '브라우저 확장 프로그램'],
  },
  {
    title: '턴업 백오피스 웹',
    slug: 'turn-up',
    description: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹'],
  },
  {
    title: '턴업 랜딩페이지 v1',
    slug: 'turn-up',
    description: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹'],
  },
  {
    title: '턴업 서버 & AI 개발',
    slug: 'turn-up',
    description: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['백엔드', 'AI'],
    filter: ['백엔드', 'AI'],
  },
  {
    title: '라이즈 APP',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 백엔드',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 APP 랜딩페이지',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 APP',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 백오피스',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹'],
  },
  {
    title: '라이즈 백엔드',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 스튜디오 v2',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 스튜디오 v1',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '패스터',
    slug: 'faster',
    description: '동대문 도매상인을 위한 중국 수출입 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <section id="works" className="pt-32 px-4 bg-white z-0 relative max-w-[1632px] mx-auto">
        <div className="lg:flex items-center justify-between">
          <h2 className="text-black text-4xl font-semibold lg:text-6xl lg:font-medium leading-tight">
            도전과 혁신으로 완성한 <br /> 압도적인 결과물들
          </h2>
          <p className="lg:w-[540px] lg:text-2xl">
            We create user-friendly digital products, which immerse customers into your brand and
            effectively help achieve your business goals.
          </p>
        </div>
        <div className="">
          <ul className="grid grid-cols-4 gap-y-2 gap-x-0 mt-12">
            {data.map((v, idx) => {
              const mockups = [
                'https://framerusercontent.com/images/aJ6jhI6h5jaHZD31aZK9Rj9ZE.png?scale-down-to=1024',
                'https://framerusercontent.com/images/fbX0l88J5FUzo32BiZ07WDOv4Ws.png?scale-down-to=1024',
                'https://framerusercontent.com/images/J6YhfgPCveOgb1YUftagjmWFnk.png?scale-down-to=1024',
                'https://framerusercontent.com/images/LZwYpdZOeveRvsTyIWNrqYprlaE.png?scale-down-to=1024',
              ];
              return (
                <li
                  className="relative p-3"
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.span
                        className="absolute inset-0 h-full w-full bg-[#e8eaef]/45 dark:bg-slate-800/[0.8] block rounded-3xl z-0"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.15 },
                        }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.15, delay: 0.2 },
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <motion.li
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, padding: 24, paddingBottom: 96 }}
                    className="z-10 group/card overflow-hidden delay-100 h-[500px] w-full bg-[#F7F8FA] duration-500 rounded-2xl flex flex-col relative"
                  >
                    <div className="flex-1 flex items-center justify-center py-8 cursor-pointer">
                      <img
                        draggable={false}
                        src={mockups[idx % 4]}
                        alt="a"
                        className="group-active:animate-ping object-cover w-full h-full group-hover/card:scale-110 group-hover/card:animate-swim transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xl font-medium mt-4 mb-0.5">{v.title}</p>
                      <p className="text-base text-foreground/80">{v.description}</p>
                    </div>
                  </motion.li>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
