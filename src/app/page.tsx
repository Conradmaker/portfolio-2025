import FourthSection from '@/components/sections/fourth';
import SecondSection from '@/components/sections/second';
import ThirdSection from '@/components/sections/third';
import { FlipWords } from '@/components/ui/hero';
import FloatingDock from '@/components/ui/nav';

export default function Home() {
  return (
    <div className="w-full bg-slate-100 flex flex-col scroll-smooth">
      <div id="hero" className="flex h-screen items-center justify-center bg-slate-100">
        <h1 className="text-9xl font-bold leading-tight">
          안녕하세요.
          <br />
          <FlipWords
            words={[
              '제너럴리스트',
              '창의적인',
              '진짜 풀스택',
              'AI도 다룰줄 아는',
              '기획력 있는',
              '디자인에 민감한',
            ]}
            duration={1200}
            className="text-blue-600"
          />
          <br />
          개발자 유원근입니다.
        </h1>
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />

      <footer></footer>
      <FloatingDock
        className="fixed mx-auto bottom-8 self-center z-50"
        items={[
          { title: 'asd', icon: <></>, href: '#hero' },
          { title: 'asd', icon: <></>, href: '#chart' },
          { title: 'asd', icon: <></>, href: '#merit' },
          { title: 'asd', icon: <></>, href: '#skill' },
        ]}
      />
    </div>
  );
}
