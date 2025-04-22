'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useUiStore } from '@/modules/zustand/ui';
import { WorkSlugs, works } from '@/lib/workData';
import FilterNav from './ui/filter-nav';
import WorkModal from './ui/work-modal';

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { setCurrentWork, currentWork, setScrollAvailable } = useUiStore();
  const onOpenWork = (slug: WorkSlugs) => {
    setCurrentWork(slug);
    setScrollAvailable(false);
  };
  const onCloseWork = () => {
    setCurrentWork(null);
    setScrollAvailable(true);
  };

  const [navOpen, setNavOpen] = useState(false);
  const [navMobileCollapsed, setNavMobileCollapsed] = useState(true);
  const toggleCollapse = () => {
    setScrollAvailable(!navMobileCollapsed);
    setNavMobileCollapsed(prev => !prev);
  };

  const [currentFilter, setCurrentFilter] = useState<string>('전체');
  const toggleFilter = (f: string) => {
    setCurrentFilter(prev => (prev === f ? '전체' : f));
  };

  return (
    <>
      <section id="works" className="pt-32 px-4 bg-white relative max-w-[1632px] mx-auto">
        <div className="lg:flex lg:items-end items-center justify-between">
          <h2 className="text-black text-4xl font-semibold lg:text-6xl lg:font-medium leading-tight">
            도전과 혁신으로 완성한 <br /> 압도적인 결과물들
          </h2>
          <p className="lg:w-[540px] lg:text-xl mt-6 lg:mt-0 break-keep leading-relaxed">
            기획의 궁극적인 목표와 디자인에서 추구하는 가치를 고려하여, 개발자의 관점에서 가장
            효율적인 방식과 스택을 적용해 빠르고 안정적인 서비스를 정해진 타임라인 내에 확실하게
            완성시킵니다.
          </p>
        </div>
        <motion.div
          onViewportEnter={() => setNavOpen(true)}
          onViewportLeave={() => setNavOpen(false)}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 gap-x-0 mt-12">
            {works.map((v, idx) => {
              if (currentFilter !== '전체' && !v.filter.includes(currentFilter)) return null;
              return (
                <>
                  <li
                    className="relative p-3"
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() =>
                      currentWork?.slug === v.slug ? onCloseWork() : onOpenWork(v.slug)
                    }
                  >
                    {!currentWork?.slug && (
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
                      layoutId={`content-${v.slug}`}
                      className="z-10 group/card overflow-hidden h-[350px] sm:h-[540px] p-6 pb-24 w-full bg-[#F7F8FA] rounded-2xl flex flex-col relative"
                    >
                      <div
                        style={{ opacity: v.slug === currentWork?.slug ? 0 : 1 }}
                        className="flex-1 flex items-center justify-center px-6 sm:px-0 sm:py-8 cursor-pointer duration-100"
                      >
                        <motion.img
                          draggable={false}
                          src={v.image}
                          alt="a"
                          className="group-active:animate-ping object-contain sm:object-cover w-full h-full group-hover/card:scale-110 group-hover/card:animate-swim transition-all duration-300"
                        />
                      </div>
                      <ul className="flex absolute top-0 left-0 p-3 sm:p-6">
                        {v.filter.map(
                          (f, idx) =>
                            idx < 2 && (
                              <li
                                className="text-sm min-w-8 text-center py-1 px-2.5 rounded-xl bg-white text-black/60 border-[0.2px] border-black/5 mr-1"
                                key={idx}
                              >
                                {f}
                              </li>
                            ),
                        )}
                      </ul>
                      <div className="flex flex-col absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-xl font-medium mt-4 mb-0.5">{v.title}</p>
                        <p className="text-base text-foreground/80">{v.subTitle}</p>
                      </div>
                    </motion.div>
                  </li>
                  {v.slug === currentWork?.slug && <WorkModal slug={v.slug} onClose={onCloseWork} />}
                </>
              );
            })}
          </ul>
        </motion.div>
      </section>
      <FilterNav
        open={navOpen}
        toggleCollapse={toggleCollapse}
        mobileCollapsed={navMobileCollapsed}
        currentFilter={currentFilter}
        toggleFilter={toggleFilter}
      />
    </>
  );
}
