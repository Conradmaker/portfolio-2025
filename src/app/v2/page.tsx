'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react';
import Hero from './hero';
import Svg from '@/components/ui/svg';
import { LucideCircle } from 'lucide-react';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const y = useTransform(scrollYProgress, [0.35, 0.6], ['40vh', '12vh']);
  const x = useTransform(scrollYProgress, [0.35, 0.6], ['0vw', '-30.7vw']);
  const x2 = useTransform(scrollYProgress, [0.35, 0.6], ['0px', '-92px']);
  const scale = useTransform(scrollYProgress, [0.35, 0.6], [1, 0.5]);

  const y2 = useTransform(scrollYProgress, [0.35, 0.6, 1], ['140vh', '17vh', '-50vh']);
  return (
    <main className="w-full relative z-20 bg-white antialiased">
      <Hero />
      <section className="second bg-white h-[4000px] z-0 relative" ref={containerRef}>
        <div className="h-screen sticky top-0 w-full">
          <motion.h2
            style={{ y, scale, x }}
            className="text-8xl font-semibold leading-tight text-gray-200 text-center"
          >
            <motion.p style={{ x: x2 }}>세상을 바꾸는 상상을</motion.p>
            <motion.p>현실화하는 가장 빠른 방법</motion.p>
          </motion.h2>

          <motion.ul
            style={{ y: y2 }}
            className="grid grid-cols-2 gap-8 mt-24 max-w-4xl ml-auto mr-18"
          >
            <li className="bg-[#001713] h-96 rounded-2xl col-span-2"></li>
            <li className="bg-[#F0FF3D] h-96 rounded-2xl col-span-1"></li>
            <li className="bg-[#E6EFEF] h-96 rounded-2xl col-span-1"></li>
          </motion.ul>
          <ul className="mt-92 ml-26">
            저는 지난 10년 동안 세계 최고의 기술 기업을 위한 0→1 제품을 만드는 데 시간을 보냈습니다.
            오늘 저는 창업자들과 협력하여 그들의 아이디어를 실현하고 있습니다. 부분 디자인 파트너로서
            저는 다음과 같은 일을 할 것입니다 blurprint model animation
          </ul>
        </div>
      </section>
      <section className="second my-24 mb-44 z-0 relative max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-black text-6xl font-medium leading-tight">
            프로젝트의 ZERO에서 <br /> HERO 그 이상까지 함께할 수 있는 개발자
          </h2>
          <p className="w-[540px] text-2xl">
            We create user-friendly digital products, which immerse customers into your brand and
            effectively help achieve your business goals.
          </p>
        </div>
        <ul className="grid grid-cols-3 mt-24 gap-x-16 gap-y-20">
          <li className="w-full">
            <Svg.Hero1 className="size-24" />
            <h3 className="text-3xl mb-4 mt-5 font-semibold">기획</h3>
            <p className="text-lg leading-normal text-foreground/70 break-keep">
              국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는
              국가원로자문회의를 둘 수 있다. 정당은 그 목적·조직과 활동이 민주적이어야 하며,
            </p>
          </li>
          <li className="w-full">
            <Svg.Hero5 className="size-24" />
            <h3 className="text-3xl mb-3 mt-5 font-semibold">리서치</h3>
            <p>
              Mixpanel 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는
              국가원로자문회의를 둘 수 있다. 정당은 그 목적·조직과 활동이 민주적이어야 하며,
            </p>
          </li>
          <li className="w-full">
            <Svg.Hero3 className="size-24" />
            <h3 className="text-3xl mb-3 mt-5 font-semibold">UI/UX디자인</h3>
            <p>
              Mixpanel 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는
              국가원로자문회의를 둘 수 있다. 정당은 그 목적·조직과 활동이 민주적이어야 하며,
            </p>
          </li>
          <li className="w-full">
            <Svg.Hero4 className="size-24" />
            <h3 className="text-3xl mb-3 mt-5 font-semibold">설계</h3>
            <p>
              3대 클라우드 + 국내 + SaaS 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여
              국가원로로 구성되는 국가원로자문회의를 둘 수 있다. 정당은 그 목적·조직과 활동이
              민주적이어야 하며, 효율
            </p>
          </li>
          <li className="w-full">
            <Svg.Hero2 className="size-24" />
            <h3 className="text-3xl mb-3 mt-5 font-semibold">개발</h3>
            <p>
              Mixpanel 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는
              국가원로자문회의를 둘 수 있다. 정당은 그 목적·조직과 활동이 민주적이어야 하며,
            </p>
          </li>
          <li className="w-full">
            <Svg.Hero6 className="size-24" />
            <h3 className="text-3xl mb-3 mt-5 font-semibold">유지보수</h3>
            <p>
              마이그레이션 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는
              국가원로자문회의를 둘 수 있다. 정당은 그 목적·조직과 활동이 민주적이어야 하며,
            </p>
          </li>
        </ul>
      </section>
      <section className="second bg-white z-0 relative max-w-[1600px] mx-auto my-60">
        <div className="flex items-center justify-between">
          <h2 className="text-black text-6xl font-medium leading-tight">
            기술에대한 배움의 즐거움을 느끼며 <br /> 성장하는 개발자
          </h2>
          <p className="w-[540px] text-2xl">
            We create user-friendly digital products, which immerse customers into your brand and
            effectively help achieve your business goals.
          </p>
        </div>
        <ul className="flex h-[520px] -> full mt-24 gap-x-8">
          <li className="w-1/3 h-full bg-gray-100 rounded-xl"></li>
          <li className="w-1/3 h-full bg-gray-100 rounded-xl"></li>
          <li className="w-1/3 h-full bg-gray-100 rounded-xl"></li>
          <li className="w-1/3 h-full bg-gray-100 rounded-xl"></li>
        </ul>
      </section>

      <section className="second bg-white z-0 relative max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-black text-6xl font-medium leading-tight">
            기술에대한 배움의 즐거움을 느끼며 <br /> 성장하는 개발자
          </h2>
          <p className="w-[540px] text-2xl">
            We create user-friendly digital products, which immerse customers into your brand and
            effectively help achieve your business goals.
          </p>
        </div>
        <ul className="flex flex-col mt-24">
          <li className="w-full flex">
            <div className="w-96 flex flex-col p-2">
              <p className="text-lg flex items-center">
                <LucideCircle className="size-2.5 mr-3 fill-blue-500 stroke-blue-500" /> 웹 / 앱 / CRX
                / 서버
              </p>
              <ul className="flex-1 flex-col justify-end flex list-disc pl-6">
                <li>React</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="flex-1 flex min-h-96 flex-col">
              <h4 className="text-lg font-semibold">realiz</h4>
              <p className="text-4xl mb-10">asdasd</p>
              <div className="flex gap-6 h-96">
                <div className="flex-1 bg-slate-400 rounded-xl"></div>
                <div className="w-96 bg-slate-400 rounded-xl"></div>
              </div>
            </div>
          </li>
          <li className="my-20 w-full h-px bg-muted-foreground/60"></li>

          <li className="w-full flex">
            <div className="w-96 flex flex-col p-2">
              <p className="text-lg flex items-center">
                <LucideCircle className="size-2.5 mr-3 fill-blue-500 stroke-blue-500" /> 웹 / 앱 / CRX
                / 서버
              </p>
              <ul className="flex-1 flex-col justify-end flex list-disc pl-6">
                <li>React</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="flex-1 flex min-h-96 flex-col">
              <h4 className="text-lg font-semibold">realiz</h4>
              <p className="text-4xl mb-10">asdasd</p>
              <div className="flex gap-6 h-96">
                <div className="flex-1 bg-slate-400 rounded-xl"></div>
                <div className="w-96 bg-slate-400 rounded-xl"></div>
              </div>
            </div>
          </li>
          <li className="my-20 w-full h-px bg-muted-foreground/60"></li>

          <li className="w-full flex">
            <div className="w-96 flex flex-col p-2">
              <p className="text-lg flex items-center">
                <LucideCircle className="size-2.5 mr-3 fill-blue-500 stroke-blue-500" /> 웹 / 앱 / CRX
                / 서버
              </p>
              <ul className="flex-1 flex-col justify-end flex list-disc pl-6">
                <li>React</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="flex-1 flex min-h-96 flex-col">
              <h4 className="text-lg font-semibold">realiz</h4>
              <p className="text-4xl mb-10">asdasd</p>
              <div className="flex gap-6 h-96">
                <div className="flex-1 bg-slate-400 rounded-xl"></div>
                <div className="w-96 bg-slate-400 rounded-xl"></div>
              </div>
            </div>
          </li>
          <li className="my-20 w-full h-px bg-muted-foreground/60"></li>
        </ul>
      </section>
    </main>
  );
}
