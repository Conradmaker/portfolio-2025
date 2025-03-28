import Svg from '@/components/ui/svg';
import React from 'react';

export default function Process() {
  return (
    <section id="process" className="second my-44 z-0 relative max-w-[1600px] mx-auto break-keep">
      <div className="flex items-center justify-between">
        <h2 className="text-black text-6xl font-medium leading-tight">
          프로젝트의 ZERO에서 <br /> HERO 그 이상까지 함께할 수 있는 개발자
        </h2>
        <p className="w-[540px] text-2xl">
          다양한 분야의 경험과 지식을 융합하고 이용하여, 다른 팀원이 발견할 수 없는 부분을 채울 수
          있습니다.
        </p>
      </div>
      <ul className="grid grid-cols-3 mt-24 gap-x-16 gap-y-20">
        <li className="w-full">
          <Svg.Hero1 className="size-24" />
          <h3 className="text-3xl mb-4 mt-5 font-semibold">기획</h3>
          <p className="text-lg leading-normal text-foreground/70 break-keep">
            데이터에 기반한 유저의 데이터와 다양한 프로덕트에대한 사용경험을 최대한 살려 와우모먼트를
            이끌어내거나 도울 수 있습니다.
          </p>
        </li>
        <li className="w-full">
          <Svg.Hero5 className="size-24" />
          <h3 className="text-3xl mb-3 mt-5 font-semibold">리서치</h3>
          <p>
            정성적, 정량적 리서치에 대한 설계가 가능하며, 의사결정에 필요한 데이터를 얻기위한
            Mixpanel, Amplitude, Firefly등의 툴을 활용 뿐만 아닌, 데이터 텍소노미를 효과적으로 설계
            구축해 프로젝트의 방향성을 명확히 제시합니다.
          </p>
        </li>
        <li className="w-full">
          <Svg.Hero3 className="size-24" />
          <h3 className="text-3xl mb-3 mt-5 font-semibold">UI/UX디자인</h3>
          <p>
            디자인 시스템을 디자이너와 함께 양자의 관점에서 설계하고, 적용할 수 있으며 효율적
            의사소통을 위해 UX, UI등의 이론에 대하여 공부하고 소통할 수 있으며, 기본적인 툴들을 활용할
            수 있습니다.
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
            다양한 마이그레이션 경험을 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여
            국가원로로 구성되는 국가원로자문회의를 둘 수 있다. 정당은 그 목적·조직과 활동이
            민주적이어야 하며,
          </p>
        </li>
      </ul>
    </section>
  );
}
