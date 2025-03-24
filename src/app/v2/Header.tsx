'use client';
import Svg from '@/components/ui/svg';
import { useScroll, useTransform, motion, AnimatePresence, Variants } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, LucideBookOpenText, LucideGithub, LucideMail } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const headerBorder = useTransform(scrollY, [750, 800], [0, 1]);
  const [contactOpen, setContactOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<'about' | 'skills' | 'works'>('about');

  const variants: Variants = {
    animate: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.1 },
    }),
    exit: (custom: number) => ({
      opacity: 0,
      x: 100,
      transition: { delay: custom * 0.1 },
    }),
    initial: (custom: number) => ({
      opacity: 0,
      x: 100,
      transition: { delay: custom * 0.1 },
    }),
  };

  useEffect(() => {
    scrollY.on('change', value => {
      if (value < 6600) {
        setCurrentTab('about');
      } else if (value < 11700) {
        setCurrentTab('skills');
      } else {
        setCurrentTab('works');
      }
    });
    return () => {
      scrollY.clearListeners();
    };
  }, []);
  useEffect(() => {
    setContactOpen(false);
  }, [currentTab]);

  return (
    <motion.header
      ref={containerRef}
      className="w-full bg-white/30 backdrop-blur-sm  sticky top-0 z-30 antialiased"
    >
      <div className="flex items-center h-[72px] relative max-w-[1600px] mx-auto w-full justify-between">
        <div className="group/logo text-3xl relative flex items-center cursor-pointer">
          <Svg.Logo className="bg-slate-200/0 w-44" />
          <div className="group-hover/logo:opacity-100 opacity-0 size-7 ml-1 rounded-full bg-blue-700 transition-all duration-300 absolute cursor-pointer"></div>
        </div>
        <ul className="flex font-medium">
          <Button
            variant={currentTab === 'about' ? 'default' : 'ghost'}
            className={'rounded-full cursor-pointer'}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            About
          </Button>
          <Button
            variant={currentTab === 'skills' ? 'default' : 'ghost'}
            className={'rounded-full'}
            onClick={() => {
              window.scrollTo({ top: 6600, behavior: 'smooth' });
            }}
          >
            Skills
          </Button>
          <Button
            variant={currentTab === 'works' ? 'default' : 'ghost'}
            className={'rounded-full'}
            onClick={() => {
              window.scrollTo({ top: 12700, behavior: 'smooth' });
            }}
          >
            Works
          </Button>
          <Button
            variant="ghost"
            className={cn(
              contactOpen ? 'bg-black text-white hover:bg-black/60 hover:text-white' : '',
              'rounded-full cursor-pointer gap-0.5',
            )}
            onClick={() => setContactOpen(!contactOpen)}
          >
            <motion.p className="inline-block w-13">Contact </motion.p>
            <ChevronDown
              className={cn('transition-all duration-500', contactOpen ? '-scale-y-100' : '')}
            />
          </Button>
          <AnimatePresence>
            {contactOpen && (
              <ul
                className={cn('flex menu-contact flex-col items-end absolute right-0 top-19 gap-2')}
              >
                <motion.li
                  variants={variants}
                  custom={1}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link href="mailto:yhg0337@gmail.com">
                    <p className="transition-all duration-300 group/link self-end flex items-center hover:bg-[#001713] bg-gray-100 p-1 rounded-full text-sm gap-1 pl-3 cursor-pointer">
                      <span className="group-hover/link:text-white transition-all duration-300">
                        yhg0337@gmail.com
                      </span>
                      <LucideMail className="size-6 p-1 bg-white rounded-full" />
                    </p>
                  </Link>
                </motion.li>
                <motion.li
                  variants={variants}
                  custom={2}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link
                    href="https://github.com/Conradmaker"
                    target="_blank"
                    className="transition-all duration-300 group/link self-end flex items-center hover:bg-[#001713] bg-gray-100 p-1 rounded-full text-sm gap-1 pl-3 cursor-pointer"
                  >
                    <span className="group-hover/link:text-white transition-all duration-300">
                      @conradmaker
                    </span>
                    <LucideGithub className="size-6 p-1 bg-white rounded-full" />
                  </Link>
                </motion.li>
                <motion.li
                  variants={variants}
                  custom={3}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link
                    href="https://velog.io/@yhg0337/posts"
                    target="_blank"
                    className="transition-all duration-300 group/link self-end flex items-center hover:bg-[#001713] bg-gray-100 p-1 rounded-full text-sm gap-1 pl-3 cursor-pointer"
                  >
                    <span className="group-hover/link:text-white transition-all duration-300">
                      @Conrad.log
                    </span>
                    <LucideBookOpenText className="size-6 p-1 bg-white rounded-full" />
                  </Link>
                </motion.li>
              </ul>
            )}
          </AnimatePresence>
        </ul>
      </div>

      <motion.div className="h-px bg-slate-200 w-full" style={{ opacity: headerBorder }}></motion.div>
    </motion.header>
  );
}
