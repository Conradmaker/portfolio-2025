'use client';
import React, { useEffect, useRef, useState } from 'react';
import { BarChart } from '../ui/barchart';
import { useScroll, useTransform } from 'motion/react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function SecondSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [chartAct, setChartAct] = useState(false);
  const [writerState, setWriterState] = useState(false);
  const blurOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const cursorRotate = useTransform(scrollYProgress, [0.4, 0.5], [0, 90]);
  const cursorW = useTransform(scrollYProgress, [0.35, 0.4], [881, 64]);
  const cursorH = useTransform(scrollYProgress, [0.35, 0.4], [21, 10]);
  const cursorX = useTransform(scrollYProgress, [0.3, 0.4], [44, 0]);
  const cursorY = useTransform(scrollYProgress, [0.3, 0.4], [-30, 0]);
  const textWidth = useTransform(scrollYProgress, [0.5, 0.7], [1, 875]);
  const cursorScaleX = useTransform(scrollYProgress, [0.75, 1], [1, 300]);
  const cursorScaleY = useTransform(scrollYProgress, [0.75, 1], [1, 50]);
  const cursorBG = useTransform(scrollYProgress, [0.75, 1], ['#2B7FFF', '#162456']);
  useEffect(() => {
    function updateOpacity(a: number) {
      setWriterState(a > 0.4);
      setChartAct(a > 0.01);
    }
    const unsubscribeX = scrollYProgress.on('change', updateOpacity);
    return () => unsubscribeX();
  }, [writerState]);

  return (
    <div id="chart" ref={containerRef} className="relative h-[9000px] overflow-clip">
      <section className="max-w-5xl h-screen flex flex-col justify-center mx-auto sticky top-0">
        <h2 className="text-left font-bold leading-snug tracking-wide space-y-4">
          <p className="text-6xl">한국에는 많은 개발자들이 있습니다.</p>
          <p className="text-3xl font-medium">
            특히 저와 같은 연차의 개발자는 그중 무려 27.3%를 차지하고 있습니다.
          </p>
        </h2>
        <div className="">
          <p className="font-semibold text-lg translate-y-6 mt-4">
            Stack Overflow 직업 개발 기간 투표
          </p>
          <BarChart
            className="h-96"
            valueFormatter={value => `${value}%`}
            data={[
              { age: 'Less than 1 year', 퍼센트: 5.5 },
              { age: '1 to 4 years', 퍼센트: 27.3 },
              { age: '5 to 9 years', 퍼센트: 25.1 },
              { age: '10 to 14 years', 퍼센트: 16.6 },
              { age: '15 to 19 years', 퍼센트: 9.3 },
              { age: '20 to 24 years', 퍼센트: 6.8 },
              { age: '25 to 29 years', 퍼센트: 4.5 },
              { age: '30 to 34 years', 퍼센트: 2.5 },
              { age: '35 to 39 years', 퍼센트: 1.4 },
              { age: '40 to 44 years', 퍼센트: 0.7 },
              { age: '45 to 49 years', 퍼센트: 0.2 },
              { age: 'More than 50 years', 퍼센트: 0.1 },
            ]}
            index="age"
            categories={['퍼센트']}
            yAxisWidth={120}
            barCategoryGap={2}
            layout="vertical"
            animation={chartAct}
          ></BarChart>
        </div>
        <motion.div
          className="absolute bg-slate-100/90 h-full top-0 -right-32 -left-32 z-10 backdrop-blur-lg flex items-center justify-center"
          style={{ opacity: blurOpacity }}
        >
          <>
            <motion.div
              className="text-5xl font-semibold text-clip overflow-hidden whitespace-nowrap"
              style={{ width: textWidth, textOverflow: 'ellipsis' }}
            >
              그렇다면 저를 주목해야 할 이유는 무엇일까요?
            </motion.div>
            <motion.div
              className={cn(
                'ml-2 w-2.5 h-16 rounded-md transition-colors duration-500 transition-none',
              )}
              style={{
                rotate: cursorRotate,
                width: cursorW,
                height: cursorH,
                x: cursorX,
                y: cursorY,
                scaleX: cursorScaleX,
                scaleY: cursorScaleY,
                background: cursorBG,
              }}
            />
          </>
        </motion.div>
      </section>
    </div>
  );
}
