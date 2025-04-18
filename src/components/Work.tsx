'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useUiStore } from '@/modules/zustand/ui';
import { works } from '@/lib/workData';
import FilterNav from './ui/filter-nav';
import WorkModal from './ui/work-modal';

// const mockups = [
//   'https://framerusercontent.com/images/aJ6jhI6h5jaHZD31aZK9Rj9ZE.png?scale-down-to=1024',
//   'https://framerusercontent.com/images/fbX0l88J5FUzo32BiZ07WDOv4Ws.png?scale-down-to=1024',
//   'https://framerusercontent.com/images/J6YhfgPCveOgb1YUftagjmWFnk.png?scale-down-to=1024',
//   'https://framerusercontent.com/images/LZwYpdZOeveRvsTyIWNrqYprlaE.png?scale-down-to=1024',
// ];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const { toggleWorkModal, setScrollAvailable } = useUiStore();
  const onClickWork = (idx: number) => {
    toggleWorkModal(works[idx].slug);
    setScrollAvailable(false);
    setSelected(idx);
  };
  const onCloseWork = () => {
    toggleWorkModal(null);
    setScrollAvailable(true);
    setSelected(null);
  };

  const [navOpen, setNavOpen] = useState(false);
  const [navMobileCollapsed, setNavMobileCollapsed] = useState(true);
  const toggleCollapse = () => {
    setScrollAvailable(!navMobileCollapsed);
    setNavMobileCollapsed(prev => !prev);
  };
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
                      className="z-10 group/card overflow-hidden h-[350px] sm:h-[540px] p-6 pb-24 w-full bg-[#F7F8FA] rounded-2xl flex flex-col relative"
                    >
                      <div
                        style={{ opacity: selected === idx ? 0 : 1 }}
                        className="flex-1 flex items-center justify-center px-6 sm:px-0 sm:py-8 cursor-pointer duration-100"
                      >
                        <motion.img
                          draggable={false}
                          src={v.image}
                          alt="a"
                          className="group-active:animate-ping object-contain sm:object-cover w-full h-full group-hover/card:scale-110 group-hover/card:animate-swim transition-all duration-300"
                        />
                      </div>
                      <div className="flex flex-col absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-xl font-medium mt-4 mb-0.5">{v.title}</p>
                        <p className="text-base text-foreground/80">{v.description}</p>
                      </div>
                    </motion.div>
                  </li>
                  {idx === selected && <WorkModal idx={idx} onClose={onCloseWork} />}
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
