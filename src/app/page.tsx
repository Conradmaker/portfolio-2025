import SecondSection from '@/components/sections/second';
import { FlipWords } from '@/components/ui/hero';
import FloatingDock from '@/components/ui/nav';

export default function Home() {
  return (
    <div className="w-full bg-slate-100 flex flex-col">
      <div className="flex h-screen items-center justify-center bg-slate-100">
        <h1 className="text-8xl font-bold leading-tight">
          안녕하세요.
          <br />
          <FlipWords
            words={['제너럴리스트', '창의적인', '진짜 풀스택', 'AI']}
            duration={1200}
            className="text-blue-600"
          />
          <br />
          개발자 유원근입니다.
        </h1>
      </div>
      <SecondSection />
      <FloatingDock
        className="fixed mx-auto bottom-8 self-center"
        items={[
          { title: 'asd', icon: <></>, href: '#' },
          { title: 'asd', icon: <></>, href: '#' },
          { title: 'asd', icon: <></>, href: '#' },
        ]}
      />
    </div>
  );
}
