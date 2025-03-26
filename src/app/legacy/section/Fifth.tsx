import React from 'react';

export default function Skills() {
  return (
    <div className="flex">
      <div className="w-4/10 p-8">
        <h2 className="text-6xl leading-tight font-bold">
          이런 기술을
          <br />
          가지고 개발합니다.
        </h2>
      </div>
      <ul className="flex-1 grid grid-cols-2 p-8 gap-8">
        <li className="col-span-2 bg-black rounded-xl">
          <h3 className="text-4xl text-white text-center font-thin my-32">Frontend</h3>
          <ul className="flex h-96 flex-wrap items-center p-6 gap-4">
            <li className="rounded-full px-3 py-1 text-white text-5xl">React</li>
            <li className="rounded-full px-3 py-1 text-white text-3xl">Next.js</li>
            <li className="rounded-full px-3 py-1 text-white text-4xl">React-Native</li>
            <li className="rounded-full px-3 py-1 text-white text-2xl">Vue.js</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">motion</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl"></li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
            <li className="rounded-full px-3 py-1 text-white text-5xl">gsap</li>
          </ul>
        </li>
        <li className="col-span-1 bg-[#F0FF3D] h-96 rounded-xl">Server</li>
        <li className="col-span-1 bg-[#E6EFEF] h-96 rounded-xl">Etc</li>
      </ul>
    </div>
  );
}
