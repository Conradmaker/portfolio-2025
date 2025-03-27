/* eslint-disable @next/next/no-img-element */
'use client';
import { LucideCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const data = [
  {
    title: 'Realiz-finance',
    slug: 'realiz-finance',
    description: '금융시장 데이터 스토어',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
  },
  {
    title: 'Realiz-so',
    slug: 'realiz-so',
    description: 'AI 마켓플레이스',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
  },
  {
    title: 'Turn Up',
    slug: 'turn-up',
    description: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
  },
  {
    title: 'RISE',
    slug: 'rise',
    description: '라이브커머스 통합 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
  },
  {
    title: '패스터',
    slug: 'faster',
    description: '동대문 패션 플랫폼',
    image: '/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
  },
];

export default function Work() {
  return (
    <>
      <section id="works" className="pt-32 bg-white z-0 relative max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-black text-6xl font-medium leading-tight">
            도전과 혁신으로 완성한 <br /> 압도적인 결과물들
          </h2>
          <p className="w-[540px] text-2xl">
            We create user-friendly digital products, which immerse customers into your brand and
            effectively help achieve your business goals.
          </p>
        </div>
        <ul className="flex flex-col mt-24">
          {data.map((v, i) => (
            <li key={i}>
              <Link href={`/work/${v.slug}`} className="w-full flex">
                <div className="w-96 flex flex-col p-2">
                  <p className="text-lg flex items-center">
                    <LucideCircle className="size-2.5 mr-3 fill-blue-500 stroke-blue-500" />
                    {v.platforms.map((platform, idx) => `${platform}${idx !== 0 ? ' / ' : ''}`)}
                  </p>
                  <ul className="flex-1 flex-col justify-end flex list-disc pl-6">
                    {v.stacks.map((stack, idx) => (
                      <li key={idx}>{stack}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 pl-12 flex min-h-96 flex-col">
                  <h4 className="text-lg font-semibold">{v.title}</h4>
                  <p className="text-4xl mb-10">{v.description}</p>
                  <div className="flex gap-6 h-[440px]">
                    <div className="flex-1 bg-[#F7F8FA] rounded-xl overflow-clip">
                      <img src={v.image} className="w-full h-full object-cover" alt={v.title} />
                    </div>
                    <div className="w-96 bg-[#F7F8FA] rounded-xl overflow-clip">
                      <img src={v.image} className="w-full h-full object-cover" alt={v.title} />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="my-20 w-full h-px bg-muted-foreground/60" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
