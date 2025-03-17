/* eslint-disable @next/next/no-img-element */
'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
export default function ThirdSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const sec1Scale = useTransform(scrollYProgress, [0.2, 0.25, 0.32, 0.38], [1, 0.9, 0.8, 0.6]);
  const sec1Radius = useTransform(scrollYProgress, [0.2, 0.25], [0, 24]);
  const sec1ImgScale = useTransform(scrollYProgress, [0.04, 0.16, 0.2], [0.1, 1.25, 1]);
  const translate = useTransform(scrollYProgress, [0.25, 0.32, 0.38], [0, -100, -300]);
  const rotate = useTransform(scrollYProgress, [0.25, 0.32, 0.38], [0, -20, -42]);

  const sec2Y = useTransform(scrollYProgress, [0.25, 0.4, 0.5, 0.55], [1200, 0, 0, -175]);
  const sec2Scale = useTransform(scrollYProgress, [0.25, 0.4, 0.5, 0.55], [0.9, 0.9, 0.9, 0.7]);
  const sec2Rotate = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.45, 0.5, 0.55],
    [30, 0, -5, -20, -45],
  );
  const sec2transition = useTransform(scrollYProgress, [0.35, 0.4, 0.52], ['100%', '60%', '0%']);

  const sec3Y = useTransform(scrollYProgress, [0.4, 0.55, 0.75, 0.8], [1200, 0, 0, -94]);
  const sec3Scale = useTransform(scrollYProgress, [0.4, 0.55, 0.75, 0.8], [0.9, 0.9, 0.9, 0.78]);
  const sec3Rotate = useTransform(
    scrollYProgress,
    [0.4, 0.55, 0.68, 0.75, 0.8],
    [30, 0, -5, -20, -45],
  );
  const sec3t1 = useTransform(scrollYProgress, [0.48, 0.5], [0, 1]);
  const sec3t2 = useTransform(scrollYProgress, [0.5, 0.53, 0.58, 0.63], [0, 1, 1, 0.1]);
  const sec3t3 = useTransform(scrollYProgress, [0.57, 0.61], [0, 1]);
  const sec3tLine = useTransform(scrollYProgress, [0.53, 0.56], [0, 600]);
  const sec3tLine2 = useTransform(scrollYProgress, [0.56, 0.6], [0, 1900]);
  const sec3t3X = useTransform(scrollYProgress, [0.57, 0.61], [-1000, 0]);
  const sec3t1Y = useTransform(scrollYProgress, [0.48, 0.51], [70, 0]);
  const sec3t2X = useTransform(scrollYProgress, [0.5, 0.53], [-200, 14]);

  const sec4Y = useTransform(scrollYProgress, [0.6, 0.8, 0.95, 1], [1200, 0, 0, 4]);
  const sec4Scale = useTransform(scrollYProgress, [0.6, 0.8, 0.95, 1], [0.9, 0.9, 0.9, 0.91]);
  const sec4Rotate = useTransform(scrollYProgress, [0.6, 0.8, 0.88, 0.95, 1], [30, 0, -5, -20, -45]);

  const sec4CircleScale = useTransform(scrollYProgress, [0.6, 0.8, 1], [0.1, 0.7, 2.3]);
  const sec4CircleY = useTransform(scrollYProgress, [0.6, 0.8, 1], [-400, -400, 1200]);

  const background = useTransform(
    scrollYProgress,
    [0, 0.13, 0.16, 0.2, 0.9, 1],
    ['#162456', '#000000', '#000000', '#FFD73C', '#FFD73C', '#ffffff'],
  );

  return (
    <>
      <section id="merit" className="h-[8500px] relative z-10" ref={containerRef}>
        <motion.div
          className="sticky top-0 w-full h-screen overflow-x-clip overflow-y-visible"
          style={{ backgroundColor: background }}
        >
          {/* card-1 */}
          <motion.div
            className="h-screen w-full absolute top-0 left-0 [perspective:800px]"
            style={{
              scale: sec1Scale,
            }}
          >
            <motion.div
              className="h-screen w-full flex items-center justify-center overflow-clip"
              style={{
                // scale: sec1Scale,
                borderRadius: sec1Radius,
                rotateX: rotate,
                translateY: translate,
                transformStyle: 'preserve-3d',
                transformOrigin: 'top',
              }}
            >
              <motion.div
                className="relative w-full h-[110%] flex icon-center justify-center overflow-visible"
                style={{
                  scale: sec1ImgScale,
                }}
              >
                <img
                  src="https://yozm.wishket.com/_next/image/?url=https%3A%2F%2Fwww.wishket.com%2Fmedia%2Fnews%2F3005%2F0306-2.png&w=3840&q=75"
                  className="object-cover w-full h-full rounded-3xl"
                  alt="a"
                />
              </motion.div>

              <div className="flex flex-col absolute z-10">
                <p className="text-white text-xl font-light text-center">개발자이기에</p>
                <h2 className="text-white text-5xl font-bold text-center mt-3.5 leading-tight tracking-wider">
                  장황한 글보다는 <br />
                  우아한 웹과 코드로
                </h2>
              </div>
            </motion.div>
          </motion.div>

          {/* card-2 */}
          <motion.div
            className="h-screen w-screen absolute bg-slate-100/0 top-0 left-0 [perspective:800px]"
            style={{ scale: sec2Scale }}
          >
            <motion.div
              className="flex items-center justify-center h-full w-full bg-white rounded-3xl overflow-clip"
              style={{
                rotateX: sec2Rotate,
                translateY: sec2Y,
                transformStyle: 'preserve-3d',
                transformOrigin: 'top',
              }}
            >
              <div className="p-18 size-full flex items-center justify-center">
                <AspectRatio ratio={1963 / 906}>
                  <img
                    src="/prod.png"
                    alt=""
                    className="absolute size-full object-cover object-left"
                  />
                  <motion.img
                    src="/wire.png"
                    style={{ width: sec2transition }}
                    className="absolute size-full object-cover object-left"
                  />
                </AspectRatio>
              </div>
              <h2 className="text-black text-center absolute flex flex-col items-center justify-center gap-2.5">
                <p className="text-3xl font-medium drop-shadow-lg">기획자와 디자이너의 상상을</p>
                <p className="text-6xl font-bold drop-shadow-lg">현실로 만들어 내는 개발자</p>
              </h2>
            </motion.div>
          </motion.div>

          {/* card-3 */}
          <motion.div
            className="card-3 h-screen w-screen absolute bg-blue-100/0 top-0 left-0 [perspective:800px]"
            style={{ scale: sec3Scale }}
          >
            <motion.div
              className="flex items-center justify-center h-full w-full bg-black rounded-3xl overflow-clip"
              style={{
                rotateX: sec3Rotate,
                translateY: sec3Y,
                transformStyle: 'preserve-3d',
                transformOrigin: 'top',
              }}
            >
              <h2 className="text-8xl font-bold text-white px-24 w-full flex flex-col items-center justify-start space-y-2.5">
                <div className="flex relative md:-left-24">
                  <div className="overflow-clip">
                    <motion.p className="pr-4" style={{ opacity: sec3t1, y: sec3t1Y }}>
                      기술의 트랜드를
                    </motion.p>
                  </div>
                  <motion.span style={{ opacity: sec3t2, x: sec3t2X }}>빠르게 따라가는,</motion.span>
                  <div className="relative px-4 mx-4">
                    <motion.div
                      className="absolute -left-0.5 top-1/2 -translate-y-1/2 flex items-center"
                      style={{ width: sec3tLine, opacity: sec3t2 }}
                    >
                      <motion.div className="h-2.5 bg-slate-100 flex-1" />
                      <span className="-scale-x-100">🚗</span>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  className="absolute -left-32 flex items-end translate-y-34"
                  style={{ width: sec3tLine2 }}
                >
                  <motion.div className="h-2.5 bg-slate-100 flex-1" />
                  <span className="-scale-x-100">🚅</span>
                </motion.div>
                <motion.span className="ml-96 mt-1 text-8xl" style={{ opacity: sec3t3, x: sec3t3X }}>
                  먼저 예측하고, 이끌어 가는
                </motion.span>
              </h2>
            </motion.div>
          </motion.div>

          {/* card-4 */}
          <motion.div
            className="h-screen w-screen absolute bg-blue-100/0 top-0 left-0 [perspective:800px]"
            style={{ scale: sec4Scale }}
          >
            <motion.div
              className="flex items-center justify-center h-full w-full rounded-3xl bg-white relative overflow-clip"
              style={{
                rotateX: sec4Rotate,
                translateY: sec4Y,
                transformStyle: 'preserve-3d',
                transformOrigin: 'top',
              }}
            >
              <motion.div
                className="size-[100vw] bg-pink-300 rounded-full flex items-center justify-center absolute"
                style={{ scale: sec4CircleScale, y: sec4CircleY }}
              ></motion.div>
              <h2 className="text-5xl font-bold text-black relative text-center space-y-2.5">
                <p>기술의 가치를 알고</p>
                <p>성장시킬 수 있는 개발자</p>
              </h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
