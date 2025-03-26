'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';

export default function FourthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const bg = useTransform(scrollYProgress, [0.3, 0.35], ['#ffffff', '#ffffff']);
  const raotate1 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const raotate2 = useTransform(scrollYProgress, [0, 1], [140, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1.5, 4.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.25, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.2], [0.25, 1]);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.7, 0.9], [0, 1, 1]);

  return (
    <section id="skill" ref={containerRef} className="h-[3300px] relative z-10">
      <motion.div className="sticky top-0 overflow-clip" style={{ backgroundColor: bg }}>
        <motion.div className="w-full h-screen flex items-center justify-center overflow-clip">
          <motion.h1 className="text-center z-10 relative space-y-2" style={{ opacity: textOpacity }}>
            <p className="text-lg">넓지만, 얉지 않은 개발 경험을 바탕으로</p>
            <p className="text-4xl font-semibold">새로운 시도를 겁내지 않는 개발자</p>
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
        </motion.div>
      </motion.div>
    </section>
  );
}
