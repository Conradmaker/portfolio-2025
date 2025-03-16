'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';

export default function FourthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const raotate1 = useTransform(scrollYProgress, [0.2, 0.7], [0, 140]);
  const raotate2 = useTransform(scrollYProgress, [0.2, 0.7], [140, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0, 1.5, 5]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0.25, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35], [0.25, 1]);

  const textOpacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  return (
    <section ref={containerRef} className="h-[8000px] relative">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-clip">
        <motion.h1 className="text-center z-10 relative" style={{ opacity: textOpacity }}>
          <p className="text-base">협업실력은 개인의 능력에 기반되기에</p>
          <p className="text-3xl font-semibold">넓지만, 절대 얉지 않은 개발 경험</p>
        </motion.h1>
        <motion.ul
          className="circle size-[12vw] absolute"
          style={{ rotate: raotate2, scale: scale, opacity: opacity2 }}
        >
          {Array.from({ length: 16 }).map((v, i) => {
            const radius = '20vw';
            // 각 요소의 각도 계산 (360도를 16개로 나눔)
            const angle = (i / 16) * 2 * Math.PI;
            // 각도에 따른 위치 계산
            const x = `calc(50% + ${radius} * ${Math.cos(angle)})`;
            const y = `calc(50% + ${radius} * ${Math.sin(angle)})`;
            return (
              <li
                key={i}
                className="bg-blue-400 rounded-full size-[3.5vw] absolute overflow-clip flex items-center justify-center"
                style={{
                  left: x,
                  top: y,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                1
              </li>
            );
          })}
        </motion.ul>
        <motion.ul
          className="circle2 size-[12vw] absolute"
          style={{ rotate: raotate1, scale, opacity }}
        >
          {Array.from({ length: 10 }).map((v, i) => {
            const radius = '14vw';
            // 각 요소의 각도 계산 (360도를 10개로 나눔)
            const angle = (i / 10) * 2 * Math.PI;
            // 각도에 따른 위치 계산
            const x = `calc(50% + ${radius} * ${Math.cos(angle)})`;
            const y = `calc(50% + ${radius} * ${Math.sin(angle)})`;
            return (
              <li
                key={i}
                className="bg-blue-600 rounded-full size-[2.6vw] absolute overflow-clip flex items-center justify-center"
                style={{
                  left: x,
                  top: y,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                1
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
