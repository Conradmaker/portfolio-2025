import React from 'react';

export default function Title({ slug }: { slug: string }) {
  return (
    <section className="h-[90vh] pb-24 flex items-center justify-center flex-col antialiased">
      <h1
        className="text-foreground/85 flex items-center justify-center flex-1"
        style={{
          fontSize: 2700 / Math.max(slug.length, 1),
          wordBreak: 'break-word',
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}
      >
        <span>{slug.replaceAll('-', '-').replace(/\b\w/g, char => char.toUpperCase())}</span>
      </h1>
      <div className="flex gap-24">
        <p className="flex-1 text-xl text-foreground/85 leading-relaxed break-keep">
          Workmate의 CEO이자 창립자는 제품이 단지 그의 머릿속 아이디어에 불과했을 때 디자이너와 협업할
          필요가 있었습니다. 우리는 초기 프로토타입을 함께 작업하여 1천만 달러의 시드 라운드를
          확보하는 데 도움을 주었고, 제품의 여러 버전을 반복적으로 개선했습니다. 디자인을 사용하여
          그의 사고를 가속화하고, 가정을 검증하며, 초기 단계에서 빠르게 방향을 전환할 수 있었습니다.
        </p>
        <ul className="flex-1 space-y-2">
          <li className="flex items-center gap-8">
            <span>참여 인원:</span> <span className="text-lg ml">기획 1 / 디자인 1 / 개발 1</span>
          </li>
          <li className="flex items-center gap-8">
            <span>참여 부분:</span> <span className="text-lg ml">기획</span>
          </li>
          <li className="flex items-center gap-8">
            <span>기간:</span> <span className="text-lg ml">기획 1 / 디자인 1 / 개발 1</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
