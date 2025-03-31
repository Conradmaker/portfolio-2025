import Svg from '@/components/ui/svg';
import React from 'react';

export default function Process() {
  return (
    <section id="process" className="second my-44 z-0 relative max-w-[1600px] mx-auto break-keep">
      <div className="flex items-end justify-between">
        <h2 className="text-black text-6xl font-medium leading-tight">
          프로젝트의 <span>ZERO</span>에서 <br /> <span>HERO</span> 그 이상까지 함께할 수 있는 개발자
        </h2>
        <p className="w-[480px] text-2xl leading-relaxed">
          다양한 분야의 경험과 지식을 융합하고 이용하여, 다른 팀원이 발견할 수 없는 부분까지 넓고 멀리
          생각하기 위해 노력합니다.
        </p>
      </div>
      <ul className="grid grid-cols-3 mt-24 gap-x-16 gap-y-20">
        {sectors.map((sector, idx) => (
          <li key={idx} className="w-full">
            {sector.svg}
            <h3 className="text-3xl mb-4 mt-5 font-semibold">{sector.sector}</h3>
            <p className="text-base leading-[1.75] text-foreground/70 break-keep">{sector.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const sectors = [
  {
    sector: '기획',
    svg: <Svg.Hero1 className="size-24" />,
    desc: '데이터에 기반한 유저의 데이터와 다양한 프로덕트에대한 사용경험을 최대한 살려 와우모먼트를 이끌어내거나 도울 수 있습니다.',
  },
  {
    sector: '리서치',
    svg: <Svg.Hero5 className="size-24" />,
    desc: '정성적, 정량적 리서치에 대한 설계가 가능하며, 의사결정에 필요한 데이터를 얻기위한 Mixpanel, Amplitude, Firefly등의 툴을 활용 뿐만 아닌, 데이터 텍소노미를 효과적으로 설계 구축해 프로젝트의 방향성을 명확히 제시합니다.',
  },
  {
    sector: 'UI / UX 디자인',
    svg: <Svg.Hero3 className="size-24" />,
    desc: '디자인 시스템을 디자이너와 함께 양자의 관점에서 설계 및 적용할 수 있고, 효율적 의사소통을 위해 UX, UI등의 이론에 대하여 공부하고 소통할 수 있으며, 기본적인 툴들 또한 활용할 수 있습니다.',
  },
  {
    sector: '설계',
    svg: <Svg.Hero4 className="size-24" />,
    desc: '3대(Azure, AWS, Google)+국내(NCP,NHN...) 등 다양한 클라우드에 대한 깊은 사용경험과 폭넓은 SaaS 정보를 통해 틀에 박힌 설계가 아닌 비용과 성능에 최적화된 아키텍쳐를 설계할 수 있습니다.',
  },
  {
    sector: '개발',
    svg: <Svg.Hero2 className="size-24" />,
    desc: '코드의 안정성을 바탕으로 한 빠른 개발이 가능하며, 프론트와 백엔드를 가리지 않는 다양한 언어와 프레임워크에 대한 경험을 바탕으로 다양한 요구조건에 대한 유연한 대처와 효율적인 개발이 가능합니다. 또한 개발에 대한 긍정적 에너지를 팀원에게 전파하고자 노력합니다.',
  },
  {
    sector: '유지보수',
    svg: <Svg.Hero6 className="size-24" />,
    desc: '다양한 마이그레이션, 업데이트의 경험을 바탕으로, 기존 시스템에 대한 안정성을 확보하고 기술&비용적 최적화를 할 수 있으며, 모니터링 시스템과 자동화된 CI/CD를 구축하여 배포 및 운영환경을 개선할 수 있습니다.',
  },
];
