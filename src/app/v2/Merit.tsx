'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';

export default function Merit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const bgX1 = useTransform(scrollYProgress, [0, 0.2], ['100%', '0%']);
  const bgX2 = useTransform(scrollYProgress, [0.25, 0.45], ['100%', '0%']);
  const y = useTransform(scrollYProgress, [0.45, 0.65], ['35vh', '12vh']);
  const x = useTransform(scrollYProgress, [0.45, 0.65], ['0vw', '-30.7vw']);
  const x2 = useTransform(scrollYProgress, [0.45, 0.65], ['0px', '-92px']);
  const scale = useTransform(scrollYProgress, [0.45, 0.65], [1, 0.5]);

  const y2 = useTransform(scrollYProgress, [0.35, 0.65, 1], ['140vh', '17vh', '-35vh']);
  const descY = useTransform(scrollYProgress, [0.35, 0.65], ['100vh', '70vh']);
  const descOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  return (
    <section className="bg-white h-[4800px] z-0 relative" ref={containerRef}>
      <div className="h-screen sticky top-0 w-full">
        <motion.h2
          style={{ y, scale, x }}
          className="text-8xl font-semibold leading-tight text-center absolute w-full"
        >
          <motion.p
            style={{
              x: x2,
              backgroundImage: 'linear-gradient(to right, #000 50%, #e6e6e6 50%)',
              backgroundSize: '200% 100%',
              backgroundPositionX: bgX1,
            }}
            className="bg-clip-text text-transparent"
          >
            세상을 바꾸는 상상을
          </motion.p>
          <motion.p
            style={{
              backgroundImage: 'linear-gradient(to right, #000 50%, #e6e6e6 50%)',
              backgroundSize: '200% 100%',
              backgroundPositionX: bgX2,
            }}
            className="bg-clip-text text-transparent"
          >
            현실화하는 가장 빠른 방법
          </motion.p>
        </motion.h2>

        <motion.ul
          style={{ y: y2 }}
          className="grid grid-cols-2 gap-8 mt-24 max-w-4xl absolute w-full right-18"
        >
          <li className="bg-[#001713] h-[640px] rounded-2xl col-span-2"></li>
          <li className="bg-[#F0FF3D] h-[400px] rounded-2xl col-span-1"></li>
          <li className="bg-[#E6EFEF] h-[400px] rounded-2xl col-span-1"></li>
        </motion.ul>
        <motion.ul
          className="pl-24 text-lg text-foreground/80 leading-relaxed"
          style={{ y: descY, opacity: descOpacity }}
        >
          문서에 빠지지 않고 제품 전략을 구체화할 수 있도록 도와줍니다.
          <br />
          충실도가 높은 인터랙티브 프로토타입을 빠르게 제작하여 아이디어를 검증할 수 있습니다.
          <br />
          엔지니어링 팀과 직접 협업하여 신속하게 반복
          <br />
          성공을 위한 디자인 팀을 구축하고 육성합니다.
        </motion.ul>
      </div>
    </section>
  );
}
