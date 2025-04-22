import React from 'react';

export default function Title({ slug }: { slug: string }) {
  return (
    <section className="flex flex-col antialiased">
      <div className="flex flex-col mt-52">
        <p className="text-center text-xl mb-4">2024</p>
        <h1
          className="leading-none text-center break-keep text-nowrap font-medium uppercase"
          style={{
            fontSize: 2000 / Math.max(slug.length, 1),
          }}
        >
          <span>{slug.replaceAll('-', '-').replace(/\b\w/g, char => char.toUpperCase())}</span>
        </h1>
        <p className="text-lg text-foreground/75 leading-relaxed break-keep text-center font-semibold pb-16 pt-12">
          금융 데이터 플랫폼의 데이터 수집, 스트리밍, 관리의 모든 과정을 개발하고
          <br /> 판매모델을 설계하였습니다.
        </p>
      </div>
      <div className="w-full h-px bg-foreground/85 mb-8" />
      <div className="flex gap-24 flex-row">
        <ul className="flex-1 space-y-3">
          <li className="flex flex-col gap-0.5">
            <span className="text-[16.5px] font-semibold">타입:</span>{' '}
            <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
          </li>
          <li className="flex flex-col gap-0.5">
            <span className="text-[16.5px] font-semibold">역할:</span>{' '}
            <span className="text-base ml">기획</span>
          </li>
          <li className="flex flex-col gap-0.5">
            <span className="text-[16.5px] font-semibold">기간:</span>{' '}
            <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
          </li>{' '}
          <li className="flex flex-col gap-0.5">
            <span className="text-[16.5px] font-semibold">스택:</span>{' '}
            <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
          </li>
          <li className="flex flex-col gap-0.5">
            <span className="text-[16.5px] font-semibold">라이브 링크:</span>{' '}
            <span className="text-base ml">기획 1 / 디자인 1 / 개발 1</span>
          </li>
        </ul>{' '}
        <p className="flex-1 text-xl text-foreground/85 leading-relaxed break-keep">
          Workmate의 CEO이자 창립자는 제품이 단지 그의 머릿속 아이디어에 불과했을 때 디자이너와 협업할
          필요가 있었습니다.
          <br />
          <br /> 우리는 초기 프로토타입을 함께 작업하여 1천만 달러의 시드 라운드를 확보하는 데 도움을
          주었고, 제품의 여러 버전을 반복적으로 개선했습니다.
          <br />
          <br /> 디자인을 사용하여 그의 사고를 가속화하고, 가정을 검증하며, 초기 단계에서 빠르게
          방향을 전환할 수 있었습니다.
        </p>
      </div>
    </section>
  );
}
