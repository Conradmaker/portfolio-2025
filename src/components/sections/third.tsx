/* eslint-disable @next/next/no-img-element */
'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';
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

  const sec2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.4, 0.5], [1200, 0, 0, -175]);
  const sec2Scale = useTransform(scrollYProgress, [0.25, 0.35, 0.4, 0.5], [0.9, 0.9, 0.9, 0.7]);
  const sec2Rotate = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.4, 0.47, 0.53],
    [40, 0, -5, -20, -42],
  );

  const sec3Y = useTransform(scrollYProgress, [0.35, 0.5, 0.55, 0.65], [1200, 0, 0, -94]);
  const sec3Scale = useTransform(scrollYProgress, [0.4, 0.5, 0.55, 0.65], [0.9, 0.9, 0.9, 0.78]);
  const sec3Rotate = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.55, 0.62, 0.68],
    [30, 0, -5, -20, -45],
  );

  const sec4Y = useTransform(scrollYProgress, [0.55, 0.65, 0.7, 0.8], [1200, 0, 0, 4]);
  const sec4Scale = useTransform(scrollYProgress, [0.55, 0.65, 0.7, 0.8], [0.9, 0.9, 0.9, 0.91]);
  const sec4Rotate = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.7, 0.77, 0.83],
    [40, 0, -5, -20, -44],
  );

  const sec4CircleScale = useTransform(scrollYProgress, [0.55, 0.7, 0.83], [0.3, 1.5, 4]);
  const sec4CircleY = useTransform(scrollYProgress, [0.55, 0.83], [800, 2000]);

  // const sec4Line = useTransform(scrollYProgress, [0.83, 1], [0, 1000]);

  const background = useTransform(
    scrollYProgress,
    [0, 0.13, 0.16, 0.2, 0.77, 0.83],
    ['#162456', '#000000', '#000000', '#fee685', '#fee685', '#ffffff'],
  );

  return (
    <>
      <section className="h-[10000px] relative" ref={containerRef}>
        <motion.div
          className="sticky top-0 w-full h-screen bg-amber-200 overflow-clip"
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
              className="flex items-center justify-center h-full w-full bg-slate-500 rounded-3xl"
              style={{
                rotateX: sec2Rotate,
                translateY: sec2Y,
                transformStyle: 'preserve-3d',
                transformOrigin: 'top',
              }}
            >
              <h2 className="text-5xl font-bold text-white">Second Section</h2>
            </motion.div>
          </motion.div>

          {/* card-3 */}
          <motion.div
            className="h-screen w-screen absolute bg-blue-100/0 top-0 left-0 [perspective:800px]"
            style={{ scale: sec3Scale }}
          >
            <motion.div
              className="flex items-center justify-center h-full w-full bg-blue-500 rounded-3xl"
              style={{
                rotateX: sec3Rotate,
                translateY: sec3Y,
                transformStyle: 'preserve-3d',
                transformOrigin: 'top',
              }}
            >
              <h2 className="text-5xl font-bold text-white">3 Section</h2>
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
                className="size-[100vw] bg-pink-500 rounded-full flex items-center justify-center absolute"
                style={{ scale: sec4CircleScale, y: sec4CircleY }}
              ></motion.div>
              <h2 className="text-5xl font-bold text-white">4 Section</h2>
            </motion.div>
          </motion.div>
          {/* <motion.div
            className="w-0.5 bg-blue-400 absolute z-20 -translate-y-24 top-1/2 left-1/2 duration-1000"
            style={{ height: sec4Line, transformOrigin: 'top', rotate: 45 }}
          /> */}
        </motion.div>
      </section>
    </>
  );
}
