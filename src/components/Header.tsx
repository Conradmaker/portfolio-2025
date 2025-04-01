'use client';
import Svg from '@/components/ui/svg';
import { useScroll, useTransform, motion, AnimatePresence, Variants } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  LucideBookOpenText,
  LucideGithub,
  LucideMail,
  LucideMessageCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const mainNav = [
  { name: 'About', to: 0 },
  { name: 'Skills', to: 6600 },
  { name: 'Works', to: 12700 },
];
export const contacts = [
  {
    type: 'Email',
    label: 'yhg0337@gmail.com',
    icon: () => <LucideMail className="size-6 p-1 bg-white rounded-full" />,
    href: 'mailto:yhg0337@gmail.com',
    target: undefined,
  },
  {
    type: 'Kakaotalk',
    label: 'KakaoTalk@유원근',
    icon: () => <LucideMessageCircle className="size-6 p-1 bg-white rounded-full" />,
    href: 'https://open.kakao.com/o/snq38Hoh',
    target: '_blank',
  },
  {
    type: 'Github',
    label: '@conradmaker',
    icon: () => <LucideGithub className="size-6 p-1 bg-white rounded-full" />,
    href: 'https://github.com/Conradmaker',
    target: '_blank',
  },
  {
    type: 'Blog',
    label: '@Conrad.log',
    icon: () => <LucideBookOpenText className="size-6 p-1 bg-white rounded-full" />,
    href: 'https://velog.io/@yhg0337/posts',
    target: '_blank',
  },
];
export default function Header() {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const headerBorder = useTransform(scrollY, [750, 800], [0, 1]);
  const [contactOpen, setContactOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<'about' | 'skills' | 'works'>('about');
  const pathname = usePathname();

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
      <div className="flex items-center h-[72px] relative max-w-[1632px] mx-auto w-full justify-between px-4">
        <Link
          href="/"
          title="홈페이지"
          className="group/logo text-3xl relative flex items-center cursor-pointer"
        >
          <Svg.Logo className="bg-slate-200/0 w-36 sm:w-44" />
          <div className="group-hover/logo:opacity-100 opacity-0 size-7 ml-1 rounded-full bg-blue-700 transition-all duration-300 absolute cursor-pointer"></div>
        </Link>
        <Button className="sm:hidden" variant="outline">
          닫기
        </Button>
        <ul className="font-medium hidden sm:flex">
          {pathname === '/' &&
            mainNav.map(({ name, to }) => (
              <Button
                variant={currentTab === name.toLowerCase() ? 'default' : 'ghost'}
                key={name}
                className={'rounded-full cursor-pointer'}
                onClick={() => window.scrollTo({ top: to, behavior: 'smooth' })}
              >
                {name}
              </Button>
            ))}

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
                {contacts.map(({ type, icon, label, ...props }, idx) => (
                  <motion.li
                    key={type}
                    variants={variants}
                    custom={idx + 1}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Link {...props}>
                      <p className="transition-all duration-300 group/link self-end flex items-center hover:bg-[#001713] bg-[#F7F8FA] p-1 rounded-full text-sm gap-1 pl-3 cursor-pointer">
                        <span className="group-hover/link:text-white transition-all duration-300">
                          {label}
                        </span>
                        {icon()}
                      </p>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            )}
          </AnimatePresence>
        </ul>
      </div>

      <motion.div className="h-px bg-slate-200 w-full" style={{ opacity: headerBorder }}></motion.div>
    </motion.header>
  );
}
