import Svg from '@/components/ui/svg';
import React from 'react';

export default function Process() {
  return (
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
  );
}
