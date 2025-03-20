'use client';

import { LucideCircle } from 'lucide-react';
import React from 'react';

export default function Work() {
  return (
    <section className="second bg-white z-0 relative max-w-[1600px] mx-auto">
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
        <li className="w-full flex">
          <div className="w-96 flex flex-col p-2">
            <p className="text-lg flex items-center">
              <LucideCircle className="size-2.5 mr-3 fill-blue-500 stroke-blue-500" /> 웹 / 앱 / CRX /
              서버
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
          <div className="flex-1 pl-12 flex min-h-96 flex-col">
            <h4 className="text-lg font-semibold">realiz</h4>
            <p className="text-4xl mb-10">asdasd</p>
            <div className="flex gap-6 h-[440px]">
              <div className="flex-1 bg-gray-100 rounded-xl overflow-clip">
                <img src="/realiz.png" className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-96 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </li>
        <li className="my-20 w-full h-px bg-muted-foreground/60"></li>

        <li className="w-full flex">
          <div className="w-96 flex flex-col p-2">
            <p className="text-lg flex items-center">
              <LucideCircle className="size-2.5 mr-3 fill-blue-500 stroke-blue-500" /> 웹 / 앱 / CRX /
              서버
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
              <div className="flex-1 bg-gray-100 rounded-xl"></div>
              <div className="w-96 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </li>
        <li className="my-20 w-full h-px bg-muted-foreground/60"></li>

        <li className="w-full flex">
          <div className="w-96 flex flex-col p-2">
            <p className="text-lg flex items-center">
              <LucideCircle className="size-2.5 mr-3 fill-blue-500 stroke-blue-500" /> 웹 / 앱 / CRX /
              서버
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
              <div className="flex-1 bg-gray-100 rounded-xl"></div>
              <div className="w-96 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </li>
        <li className="my-20 w-full h-px bg-muted-foreground/60"></li>
      </ul>
    </section>
  );
}
