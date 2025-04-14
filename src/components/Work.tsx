'use client';
import React, { useState } from 'react';

import { AnimatePresence, motion, stagger, useMotionValue } from 'motion/react';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { useRouter } from 'next/navigation';
import useQS from '@/hooks/useQS';
import { useUiStore } from '@/modules/zustand/ui';
import { Button } from './ui/button';
import {
  LucideBinoculars,
  LucideBlend,
  LucideChrome,
  LucideLaptop,
  LucidePalette,
  LucideProportions,
  LucideServer,
  LucideSparkle,
  LucideSparkles,
  LucideTabletSmartphone,
  LucideX,
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
const filters = [
  { value: '전체', icon: <LucideBlend className="size-4" /> },
  { value: '프론트엔드', icon: <LucideProportions className="size-4" /> },
  { value: '웹', icon: <LucideLaptop className="size-4" /> },
  { value: '앱', icon: <LucideTabletSmartphone className="size-4" /> },
  { value: '백엔드', icon: <LucideServer className="size-4" /> },
  { value: '브라우저 확장 프로그램', icon: <LucideChrome className="size-4" /> },
  { value: 'AI', icon: <LucideSparkles className="size-4" /> },
  { value: '기획', icon: <LucideBinoculars className="size-4" /> },
  { value: '디자인', icon: <LucidePalette className="size-4" /> },
];
const mockups = [
  'https://framerusercontent.com/images/aJ6jhI6h5jaHZD31aZK9Rj9ZE.png?scale-down-to=1024',
  'https://framerusercontent.com/images/fbX0l88J5FUzo32BiZ07WDOv4Ws.png?scale-down-to=1024',
  'https://framerusercontent.com/images/J6YhfgPCveOgb1YUftagjmWFnk.png?scale-down-to=1024',
  'https://framerusercontent.com/images/LZwYpdZOeveRvsTyIWNrqYprlaE.png?scale-down-to=1024',
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const { toggleWorkModal, setScrollAvailable } = useUiStore();
  const onClickWork = (idx: number) => {
    toggleWorkModal(data[idx].slug);
    setScrollAvailable(false);
    setSelected(idx);
  };
  const onCloseWork = () => {
    toggleWorkModal(null);
    setScrollAvailable(true);
    setSelected(null);
  };

  const [navOpen, setNavOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<string>('전체');
  const toggleFilter = (f: string) => {
    setCurrentFilter(prev => {
      if (prev === f) {
        return '전체';
      }
      return f;
    });
  };

  return (
    <>
      <section id="works" className="pt-32 px-4 bg-white relative max-w-[1632px] mx-auto">
        <div className="lg:flex items-center justify-between">
          <h2 className="text-black text-4xl font-semibold lg:text-6xl lg:font-medium leading-tight">
            도전과 혁신으로 완성한 <br /> 압도적인 결과물들
          </h2>
          <p className="lg:w-[540px] lg:text-2xl mt-2 lg:mt-0">
            We create user-friendly digital products, which immerse customers into your brand and
            effectively help achieve your business goals.
          </p>
        </div>
        <motion.div
          className=""
          onViewportEnter={() => setNavOpen(true)}
          onViewportLeave={() => setNavOpen(false)}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 gap-x-0 mt-12">
            {data.map((v, idx) => {
              if (currentFilter !== '전체' && !v.filter.includes(currentFilter)) return null;
              return (
                <>
                  <li
                    className="relative p-3"
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      if (selected === idx) {
                        setSelected(null);
                      } else {
                        onClickWork(idx);
                      }
                    }}
                  >
                    {!selected && (
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
                    )}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.77 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.77 }}
                      transition={{ duration: 0.3 }}
                      layoutId={`content-${idx}`}
                      className="z-10 group/card overflow-hidden h-[500px] p-6 pb-24 w-full bg-[#F7F8FA] rounded-2xl flex flex-col relative"
                    >
                      <div
                        style={{ opacity: selected === idx ? 0 : 1 }}
                        className="flex-1 flex items-center justify-center py-8 cursor-pointer duration-100"
                      >
                        <motion.img
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
                    </motion.div>
                  </li>
                  {idx === selected && <SelectedCard idx={idx} onClose={onCloseWork} />}
                </>
              );
            })}
          </ul>
        </motion.div>
      </section>
      <AnimatePresence>
        {navOpen && (
          <motion.nav
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 100,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="fixed bottom-14 left-1/2 -translate-x-1/2 z-20"
          >
            <ul className="flex items-center px-2 py-1.5 bg-[#e8eaef]/45 rounded-xl backdrop-blur-2xl shadow-lg shadow-gray-200 antialiased">
              {filters.map(filter => (
                <li
                  onClick={() => toggleFilter(filter.value)}
                  key={filter.value}
                  className={cn(
                    'relative rounded-lg flex items-center cursor-pointer font-medium py-1.5 px-5 min-w-12 text-center hover:bg-white/60 active:bg-white/0',
                    currentFilter === filter.value && 'gap-1.5 pl-4',
                  )}
                >
                  {currentFilter === filter.value && (
                    <motion.div
                      layoutId="filter-active"
                      className="absolute left-0 right-0 bottom-0 top-0 bg-white rounded-lg z-0 shadow-xs"
                    />
                  )}
                  {currentFilter === filter.value && (
                    <motion.p
                      className="relative"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {filter.icon}
                    </motion.p>
                  )}
                  <p className="relative">{filter.value}</p>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

const SelectedCard = ({ idx, onClose }: { idx: number; onClose: () => void }) => {
  return (
    <div className="px-2 md:px-4 xl:px-0 top-0 left-0 right-0 fixed z-50" data-lenis-prevent="true">
      <AnimatePresence>
        <motion.div
          onClick={onClose}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.6,
          }}
          className="absolute left-0 h-screen w-full bg-black opacity-60"
        />
      </AnimatePresence>
      <motion.div
        layoutId={`content-${idx}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative z-[70] p-2 bg-white max-w-5xl mt-[5vh] w-full h-[90vh] mx-auto shadow-xl rounded-xl"
      >
        <ScrollArea className="w-full px-6 antialiased h-full">
          <div className="flex flex-col mt-40">
            <p className="text-center text-xl mb-4">2024</p>
            <h1
              className="leading-none text-center break-keep text-nowrap font-medium uppercase"
              style={{
                fontSize: 900 / Math.max(data[idx].title.length, 1),
              }}
            >
              <span>
                {data[idx].title.replaceAll('-', '-').replace(/\b\w/g, char => char.toUpperCase())}
              </span>
            </h1>
            <p className="text-lg text-foreground/75 leading-relaxed break-keep text-center font-medium pb-18 pt-12">
              금융 데이터 플랫폼의 데이터 수집, 스트리밍, 관리의 모든 과정을 개발하고
              <br /> 판매모델을 설계하였습니다.
            </p>
          </div>
          <div className="w-full h-px bg-foreground/85" />
          <div className="flex gap-12 mt-12 mb-12">
            <div className="bg-[#F7F8FA] rounded-xl overflow-hidden h-[500px] flex-1 flex justify-center items-center">
              <motion.img
                draggable={false}
                src={mockups[idx % 4]}
                alt="a"
                className="h-full transition-all object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="flex-1 text-xl text-foreground/85 leading-relaxed break-keep">
                Workmate의 CEO이자 창립자는 제품이 단지 그의 머릿속 아이디어에 불과했을 때 디자이너와
                협업할 필요가 있었습니다.
                <br />
                <br /> 우리는 초기 프로토타입을 함께 작업하여 1천만 달러의 시드 라운드를 확보하는 데
                도움을 주었고, 제품의 여러 버전을 반복적으로 개선했습니다.
                <br />
                <br /> 디자인을 사용하여 그의 사고를 가속화하고, 가정을 검증하며, 초기 단계에서 빠르게
                방향을 전환할 수 있었습니다.
              </p>
            </div>
          </div>
          <ul className="flex-1 space-y-3 mt-8">
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">타입:</span>{' '}
              <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">역할:</span>{' '}
              <span className="text-base ml">기획</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">기간:</span>{' '}
              <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
            </li>{' '}
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">스택:</span>{' '}
              <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-[16.5px] font-semibold">라이브 링크:</span>{' '}
              <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
            </li>
          </ul>
          <div className="flex gap-12 mt-12 mb-12">
            <div className="bg-[#F7F8FA] rounded-xl overflow-hidden h-[500px] flex-1 flex justify-center items-center">
              <motion.img
                draggable={false}
                src={mockups[idx % 4]}
                alt="a"
                className="h-full transition-all object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="flex-1 text-xl text-foreground/85 leading-relaxed break-keep">
                Workmate의 CEO이자 창립자는 제품이 단지 그의 머릿속 아이디어에 불과했을 때 디자이너와
                협업할 필요가 있었습니다.
                <br />
                <br /> 우리는 초기 프로토타입을 함께 작업하여 1천만 달러의 시드 라운드를 확보하는 데
                도움을 주었고, 제품의 여러 버전을 반복적으로 개선했습니다.
                <br />
                <br /> 디자인을 사용하여 그의 사고를 가속화하고, 가정을 검증하며, 초기 단계에서 빠르게
                방향을 전환할 수 있었습니다.
              </p>
            </div>
          </div>

          <ScrollBar />
        </ScrollArea>
      </motion.div>
    </div>
  );
};
