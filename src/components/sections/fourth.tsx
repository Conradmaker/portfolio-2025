'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';

export default function FourthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const bg = useTransform(scrollYProgress, [0.3, 0.35], ['#ffffff', '#ffffff']);
  const raotate1 = useTransform(scrollYProgress, [0, 0.4], [0, 140]);
  const raotate2 = useTransform(scrollYProgress, [0, 0.4], [140, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1.5, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.25, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.05, 0.15], [0.25, 1]);

  const textOpacity = useTransform(scrollYProgress, [0.08, 0.13, 0.3], [0, 1, 0]);

  const c1y = useTransform(scrollYProgress, [0.35, 0.45], ['100vh', '0vh']);
  const c2y = useTransform(scrollYProgress, [0.55, 0.65], ['100vh', '0vh']);
  const c3y = useTransform(scrollYProgress, [0.65, 0.75], ['100vh', '0vh']);
  const c4y = useTransform(scrollYProgress, [0.75, 0.85], ['100vh', '0vh']);

  return (
    <section id="skill" ref={containerRef} className="h-[10000px] relative z-10">
      <motion.div className="sticky top-0" style={{ backgroundColor: bg }}>
        <motion.div className="w-full h-screen flex items-center justify-center overflow-clip">
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
        </motion.div>

        <motion.ul
          style={{}}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center border-2"
        >
          <motion.li className="absolute right-0 top-24 w-[80vw] h-[80vh]" style={{ y: c1y }}>
            <h3 className="text-5xl h-24 flex items-center font-medium">
              <p>WEB & APP</p>
            </h3>
          </motion.li>
          <motion.li className="absolute right-0 top-48 w-[80vw] h-[80vh]" style={{ y: c2y }}>
            <h3 className="text-5xl h-24 flex items-center font-medium">SERVER</h3>
          </motion.li>
          <motion.li className="absolute right-0 top-72 w-[80vw] h-[80vh]" style={{ y: c3y }}>
            <h3 className="text-5xl h-24 flex items-center font-medium">DB & INFRA</h3>
          </motion.li>
          <motion.li className="absolute right-0 top-96 w-[80vw] h-[80vh]" style={{ y: c4y }}>
            <h3 className="text-5xl h-24 flex items-center font-medium">ETC</h3>
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

{
  /* <div>
<svg
  className="vertical-guide"
  width="1"
  height="66"
  viewBox="0 0 1 66"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  data-v-77a0c98d=""
  style={{
    translate: 'none',
    rotate: 'none',
    scale: 'none',
    opacity: 1,
    transform: 'translate(0px, 0px)',
  }}
>
  <line
    x1="0.5"
    y1="0.5"
    x2="0.499997"
    y2="65.6187"
    stroke="url(#paint0_linear_155_1093)"
    strokeDasharray="12 12"
    data-v-77a0c98d=""
  ></line>
  <defs data-v-77a0c98d="">
    <linearGradient
      id="paint0_linear_155_1093"
      x1="5.99884e-07"
      y1="1.26674"
      x2="3.59303e-05"
      y2="71.4808"
      gradientUnits="userSpaceOnUse"
      data-v-77a0c98d=""
    >
      <stop stopColor="#6B6B6B" data-v-77a0c98d=""></stop>
      <stop offset="1" stopColor="#D1D1D1" stopOpacity="0" data-v-77a0c98d=""></stop>
    </linearGradient>
  </defs>
</svg>
</div> */
}

{
  /* <svg
id="cube-layer-0"
className="cube-layer"
style={{
  inset: '0px auto auto 0px',
  zIndex: 4,
  overflow: 'visible',
  translate: 'none',
  rotate: 'none',
  scale: 'none',
  margin: '0px',
  maxWidth: '115px',
  width: '115px',
  maxHeight: '71px',
  height: '71px',
  padding: '0px',
  transform: 'translate(0px, 0px)',
}}
xmlns="http://www.w3.org/2000/svg"
width="115"
height="71"
viewBox="0 0 115 71"
fill="none"
data-v-77a0c98d=""
>
<path
  d="M58 1L114.5 28V45.25L58 75.25L1 45.25V28L58 1Z"
  fill="white"
  data-v-77a0c98d=""
></path>
<path
  d="M1 28L58 1L114.5 28M1 28V45.25L58 75.25M1 28L58 58M58 58V75.25M58 58L114.5 28M114.5 28V45.25L58 75.25"
  stroke="url(#cube-layer-gradient-0)"
  data-v-77a0c98d=""
></path>
<defs data-v-77a0c98d="">
  <linearGradient
    id="cube-layer-gradient-0"
    x1="96.5"
    y1="16.4999"
    x2="6.5"
    y2="34.9999"
    gradientUnits="userSpaceOnUse"
    data-v-77a0c98d=""
  >
    <stop offset="0" stopColor="#BC35FE" data-v-77a0c98d=""></stop>
    <stop offset="1" stopColor="#4BC5FF" data-v-77a0c98d=""></stop>
  </linearGradient>
</defs>
</svg> */
}
