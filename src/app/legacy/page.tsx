import FourthSection from './section/Fourth';
import SecondSection from './section/Second';
import ThirdSection from './section/Third';
import { FlipWords } from '@/components/ui/filp-words';

export default function Home() {
  return (
    <div className="w-full flex flex-col scroll-smooth">
      <div id="hero" className="flex h-screen items-center justify-center">
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
    </div>
  );
}
