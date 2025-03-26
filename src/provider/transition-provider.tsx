'use client';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import React from 'react';
const { unstable_ViewTransition: ViewTransition } = React as {
  unstable_ViewTransition: typeof React.Fragment;
} & typeof React;

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ViewTransition key={pathname}>
      <AnimatePresence>
        <motion.div
          key={pathname}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ViewTransition>
  );
}
