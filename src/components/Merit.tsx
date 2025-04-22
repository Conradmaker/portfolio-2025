'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { LucideArrowUpRight, LucideDot } from 'lucide-react';
import { useUiStore } from '@/modules/zustand/ui';

function Mobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const bgSc = useTransform(scrollYProgress, [0.15, 0.4, 0.55, 0.65], [1, 1.1, 1.1, 0.72]);
  const bgLeading = useTransform(scrollYProgress, [0.15, 0.4, 0.55, 0.65], [1.5, 1.5, 1.5, 1.05]);
  const bgX1 = useTransform(scrollYProgress, [0.1, 0.3], ['100%', '0%']);
  const bgX2 = useTransform(scrollYProgress, [0.35, 0.55], ['100%', '0%']);
  const bgTop = useTransform(scrollYProgress, [0.62, 0.85], ['50%', '28%']);
  const descOpacity = useTransform(scrollYProgress, [0.62, 0.85], [0, 1]);
  const descTop = useTransform(scrollYProgress, [0.62, 0.85], ['60%', '36%']);
  return (
    <>
      <section className="bg-white h-[3000px] z-0 relative" ref={containerRef}>
        <div className="h-screen sticky top-0 w-full overflow-clip">
          <motion.h2
            style={{ top: bgTop, left: '50%', lineHeight: bgLeading }}
            className="text-[9vw] font-semibold w-full text-center absolute -translate-x-1/2 -translate-y-1/2"
          >
            <motion.p
              style={{
                scale: bgSc,
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
                scale: bgSc,
                backgroundImage: 'linear-gradient(to right, #000 50%, #e6e6e6 50%)',
                backgroundSize: '200% 100%',
                backgroundPositionX: bgX2,
              }}
              className="bg-clip-text text-transparent"
            >
              현실로 끌어내는 개발자
            </motion.p>
          </motion.h2>

          <motion.ul
            style={{ opacity: descOpacity, top: descTop }}
            className=" text-foreground/80 leading-[1.75] px-4 absolute w-full top-1/2 flex flex-col gap-4"
          >
            {mainMerits.map((merit, idx) => (
              <li key={idx} className="flex items-start break-keep">
                <LucideDot className="size-8" />
                <span className="flex-1 leading-snug">저는 {merit}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="px-4">
        <motion.p className="text-[7vw] font-semibold text-center">
          저는 이런 생각을 가지고 <br />{' '}
          <span className="relative">
            개발에 접근
            <div className="absolute h-1 left-0 -bottom-1 w-full bg-black" />
          </span>{' '}
          합니다.
        </motion.p>
        <motion.ul className="flex flex-col w-full mt-10 gap-4">
          <li className="bg-[#F0FF3D] h-[260px] rounded-2xl col-span-1 p-6 break-keep flex flex-col">
            <p className="text-sm">라이프</p>
            <h4 className="text-[22px] font-semibold mt-1 mb-3 flex-1">
              덕업일치의 삶을 지향합니다.
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              개발이 일이되면 성장은 멈추기에
              <br />
              즐거운 개발을 추구하고, 그로인한 자연스러운 개인의 성장을 도모합니다,
            </p>
          </li>
          <li className="bg-[#E6EFEF] h-[260px] rounded-2xl col-span-1 p-6 break-keep flex flex-col">
            <p className="text-sm">팀문화</p>
            <h4 className="text-[22px] font-semibold mt-1 mb-3 flex-1">팀 문화에 진심입니다.</h4>
            <p className="text-foreground/70 leading-relaxed">
              &ldquo;훌륭한 개발팀 없이 훌륭한 소프트웨어를 만들 수는 없다.&rdquo;는 말이 있듯이,
              개인의 성장이 팀의 성장이 되고, 팀의 성장은 회사의 성장이 된다고 생각합니다.
            </p>
          </li>
          <li className="bg-[#001713] text-white rounded-2xl col-span-2 p-6 flex">
            <div className="flex-col flex">
              <p className="text-sm text-background/70">업무방식</p>
              <h4 className="text-[22px] font-semibold text-background/90 mt-1 mb-8">
                속도를 매우 중요하게 생각합니다.
              </h4>
              <p className="text-base text-background/70 leading-relaxed">
                급할수록 실수가 많아지니 돌아가라고 말합니다. <br />
                하지만, 저는 빠르게 실패하고 제대로 회복하는 것이 더 중요하다고 생각합니다.
              </p>
            </div>
            <div className="flex flex-1 justify-end self-end "></div>
          </li>
          <li className="border border-[#E6EFEF] rounded-2xl col-span-2 p-6">
            <div className="">
              <h4 className="text-[5vw] font-semibold text-foreground/90 leading-normal mb-8">
                개발에는 유연하게 대응하고, <br />
                흔들리지 않는 가치관을 지니고 있습니다.
              </h4>
              <p className="text-base text-foreground/70">
                개발자의 성향은 초기에 형성된다고 생각합니다. <br />
                개발을 업으로 시작하기 전 포트폴리오를 만들때의 마음은 지금과 같습니다.
              </p>
            </div>
            <div className="flex flex-1 justify-end self-end">
              <Button className="cursor-pointer gap-1" asChild>
                <Link
                  href="https://60f06eb62ae5080008fb9533--wongeun.netlify.app/resume"
                  target="_blank"
                >
                  4년전의 각오 <LucideArrowUpRight className="size-5" />
                </Link>
              </Button>
            </div>
          </li>
        </motion.ul>
      </section>
    </>
  );
}
export default function Merit() {
  const { isMobile } = useUiStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const bgX1 = useTransform(scrollYProgress, [0, 0.2], ['100%', '0%']);
  const bgX2 = useTransform(scrollYProgress, [0.25, 0.45], ['100%', '0%']);
  const y = useTransform(scrollYProgress, [0.45, 0.65], ['35vh', '12vh']);
  const x = useTransform(scrollYProgress, [0.45, 0.65], ['0vw', '-31.6vw']);
  const scale = useTransform(scrollYProgress, [0.45, 0.65], [1, 0.5]);

  const titleReverse = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);

  const y2 = useTransform(scrollYProgress, [0.35, 0.65, 1], ['140vh', '25vh', '-5vh']);
  const descY = useTransform(scrollYProgress, [0.35, 0.65], ['100vh', '68vh']);
  const descOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  if (isMobile) return <Mobile />;
  return (
    <section className="bg-white h-[4800px] z-0 relative" ref={containerRef}>
      <div className="h-screen sticky top-0 w-full overflow-clip">
        <motion.h2
          style={{ y, scale, x }}
          className="text-8xl font-semibold leading-tight text-center absolute w-full"
        >
          <motion.p
            style={{
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
            현실로 끌어내는 개발자
          </motion.p>
        </motion.h2>
        <motion.p
          style={{ y: y, scale: scale, x: x, opacity: titleReverse }}
          className="text-[8vw] lg:text-8xl font-semibold leading-tight text-start absolute w-full bg-white translate-x-56"
        >
          저는 이런 생각과
          <br />
          장점을 가지고 있습니다.
        </motion.p>

        <motion.ul
          style={{ y: y2 }}
          className="flex flex-col md:grid grid-cols-2 gap-6 mt-24 max-w-3xl absolute w-full sm:right-18 z-10"
        >
          <li className="bg-[#F0FF3D] sm:h-[360px] rounded-2xl col-span-1 p-8 break-keep flex flex-col">
            <p className="text-sm">라이프</p>
            <h4 className="text-2xl font-semibold mt-1 mb-3 flex-1">덕업일치의 삶을 지향합니다.</h4>
            <p className="text-foreground/70 leading-relaxed">
              개발이 일이되면 성장은 멈추기에
              <br />
              즐거운 개발을 추구하고, 그로인한 자연스러운 개인의 성장을 도모합니다,
            </p>
          </li>
          <li className="bg-[#E6EFEF] sm:h-[360px] rounded-2xl col-span-1 p-8 break-keep flex flex-col">
            <p className="text-sm">팀문화</p>
            <h4 className="text-2xl font-semibold mt-1 mb-3 flex-1">팀 문화에 진심입니다.</h4>
            <p className="text-foreground/70 leading-relaxed">
              &ldquo;훌륭한 개발팀 없이 훌륭한 소프트웨어를 만들 수는 없다.&rdquo;는 말이 있듯이,
              개인의 성장이 팀의 성장이 되고, 팀의 성장은 회사의 성장이 된다고 생각합니다.
            </p>
          </li>
          <li className="bg-[#001713] text-white h-[180px] rounded-2xl col-span-2 py-7 px-6 flex">
            <div className="flex-col flex">
              <p className="text-sm text-background/70">업무방식</p>
              <h4 className="text-2xl font-semibold text-background/90 mt-1 mb-4">
                속도를 매우 중요하게 생각합니다.
              </h4>
              <p className="text-base text-background/70 leading-relaxed">
                누군가는 급할수록 실수가 많아지니 돌아가라고 말합니다. <br />
                하지만, 저는 빠르게 실패하고 제대로 회복하는 것이 더 중요하다고 생각합니다.
              </p>
            </div>
            <div className="flex flex-1 justify-end self-end "></div>
          </li>
          <li className="border border-[#E6EFEF] h-[180px] rounded-2xl col-span-2 py-5 px-6 flex">
            <div className="">
              {/*  */}
              <h4 className="text-xl font-semibold text-foreground/90 leading-normal mb-8">
                개발에는 유연하게 반응하고, <br />
                개인으로써 흔들리지 않는 가치관을 지니고 있습니다.
              </h4>
              <p className="text-base text-foreground/70">
                개발자의 20년 성향은 초기에 형성된다고 생각합니다. <br />
                개발을 업으로 시작하기 전 포트폴리오를 만들때의 마음은 지금과 같습니다.
              </p>
            </div>
            <div className="flex flex-1 justify-end self-end ">
              <Button className="cursor-pointer gap-1" asChild>
                <Link
                  href="https://60f06eb62ae5080008fb9533--wongeun.netlify.app/resume"
                  target="_blank"
                >
                  4년전의 각오 <LucideArrowUpRight className="size-5" />
                </Link>
              </Button>
            </div>
          </li>
        </motion.ul>

        <motion.ul
          className="pl-24 text-lg text-foreground/80 leading-[1.75] hidden sm:block"
          style={{ y: descY, opacity: descOpacity }}
        >
          {mainMerits.map((merit, idx) => (
            <li key={idx} className="flex items-center">
              <LucideDot />
              {merit}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

const mainMerits = [
  '문서의 늪 빠지지 않고 제품과 전략을 빠르게 구체화할 수 있습니다.',
  '인터랙티브 프로토타입을 단순 UI가 아닌 코드로 빠르게 제작하여 아이디어를 검증할 수 있습니다.',
  '개발팀뿐만 아닌 다른분야의 팀원과도 직접 협업하여 신속하게 반복하며 제품을 끊임없이 개선합니다.',
  '성공을 위한 소프트웨어 개발팀 빌딩에 기여하고 구축하며 육성합니다.',
];
