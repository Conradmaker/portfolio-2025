import { useUiStore } from '@/modules/zustand/ui';
import { AnimatePresence, motion } from 'motion/react';
import { LucideFilter } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  LucideBinoculars,
  LucideBlend,
  LucideChrome,
  LucideLaptop,
  LucidePalette,
  LucideProportions,
  LucideServer,
  LucideSparkles,
  LucideTabletSmartphone,
} from 'lucide-react';
import { Button, buttonVariants } from './button';

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

type FilterNavProps = {
  mobileCollapsed: boolean;
  open: boolean;
  currentFilter: string;
  toggleFilter: (f: string) => void;
  toggleCollapse: () => void;
};
export default function FilterNav({
  mobileCollapsed,
  open,
  currentFilter,
  toggleFilter,
  toggleCollapse,
}: FilterNavProps) {
  const { isMobile } = useUiStore();
  return (
    <>
      <AnimatePresence>
        {open && mobileCollapsed && (
          <motion.div
            className="md:hidden fixed bottom-6 right-5 z-40"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={toggleCollapse}
          >
            <Button className="gap-0 items-center" size="lg">
              <LucideFilter />
              <span className="ml-1.5">필터</span>
              {currentFilter !== '전체' && <span className="text-xs ml-0.5 mb-0.5">(1)</span>}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && !mobileCollapsed && (
          <motion.div
            className="md:hidden fixed bottom-0 top-0 left-0 right-0 bg-black/20 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={toggleCollapse}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (!mobileCollapsed || !isMobile) && (
          <motion.nav
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed flex flex-col bottom-0 left-0 right-0 md:block md:bg-transparent md:top-auto md:bottom-14 md:right-auto md:left-1/2 md:-translate-x-1/2 z-30"
          >
            <div className="p-3 pt-0 md:p-0">
              <ul className="border md:border-0 relative flex flex-col w-auto gap-1 md:gap-0 md:flex-row items-center px-2 py-1.5 bg-white md:bg-[#e8eaef]/45 rounded-xl backdrop-blur-2xl shadow-xl md:shadow-lg shadow-gray-300 md:shadow-gray-200 antialiased">
                {filters.map(filter => (
                  <li
                    onClick={() => toggleFilter(filter.value)}
                    key={filter.value}
                    className={cn(
                      'gap-3 md:gap-1.5 relative rounded-lg flex items-center cursor-pointer font-medium py-1.5 px-5 w-full md:w-auto min-w-12 text-center hover:bg-white/60 active:bg-white/0',
                      currentFilter === filter.value && 'md:pl-4',
                    )}
                  >
                    {currentFilter === filter.value && (
                      <motion.div
                        layoutId="filter-active"
                        className="absolute left-0 right-0 bottom-0 top-0 bg-[#e8eaef]/40 border border-gray-200/70 md:bg-white rounded-lg z-0 shadow-xs"
                      />
                    )}
                    {isMobile ? (
                      <p className="relative">{filter.icon}</p>
                    ) : (
                      currentFilter === filter.value && (
                        <motion.p
                          className="relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {filter.icon}
                        </motion.p>
                      )
                    )}
                    <p className="relative text-nowrap">{filter.value}</p>
                  </li>
                ))}
                <li
                  onClick={toggleCollapse}
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'w-full rounded-lg text-center my-4 md:hidden',
                  )}
                >
                  <p className="relative text-nowrap">닫기</p>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
