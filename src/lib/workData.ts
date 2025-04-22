export type WorkSlugs =
  | 'realiz_finance'
  | 'realiz_finance_backend'
  | 'realiz'
  | 'realiz_backend'
  | 'turnup_app'
  | 'turnup_crx'
  | 'turnup_bo'
  | 'turnup_web'
  | 'turnup_backend'
  | 'rise_landing'
  | 'rise_app'
  | 'rise_bo'
  | 'rise_inside'
  | 'faster'
  | 'rise_backend'
  | 'rise_studio_v2'
  | 'rise_studio_v1';
export type Work = {
  title: string;
  slug: WorkSlugs;
  subTitle: string;
  image: string;
  image2: string;
  stacks: string[];
  platforms: string[];
  filter: string[];
  description?: string;
  content?: string[];
};
export const works: Work[] = [
  {
    title: 'REALIZ-FINANCE 웹',
    slug: 'realiz_finance',
    subTitle: '금융시장 리얼타임 데이터 API 스토어',
    image: '/mock/realiz_finance.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹', '기획', '디자인'],
    description: '주식 데이터 플랫폼의 고객용 대시보드, 문서, 랜딩페이지를 개발하였습니다.',
    content: [],
  },
  {
    title: 'REALIZ-FINANCE 백엔드',
    slug: 'realiz_finance_backend',
    subTitle: '금융시장 리얼타임 데이터 API 스토어',
    image: '/mock/realiz_finance_backend.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    description:
      '글로벌 주식을 포함한 금융 시장의 데이터 수집, 가공을 자동화하고 및 B2B,B2C 대용량 트래픽을 처리하는 API 서버를 개발하였습니다.',
    filter: ['백엔드', 'AI', '기획'],
  },
  {
    title: 'REALIZ 웹',
    slug: 'realiz',
    subTitle: 'AI 모델 마켓플레이스',
    image: '/mock/realiz.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹'],
  },
  {
    title: 'REALIZ 백엔드',
    slug: 'realiz_backend',
    subTitle: 'AI 모델 마켓플레이스',
    image: '/mock/realiz_backend.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['백엔드', 'AI'],
  },
  {
    title: '턴업 APP',
    slug: 'turnup_app',
    subTitle: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/mock/turnup_app.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '턴업 브라우저 확장 프로그램',
    slug: 'turnup_crx',
    subTitle: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/mock/turnup_crx.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '브라우저 확장 프로그램'],
  },
  {
    title: '턴업 백오피스',
    slug: 'turnup_bo',
    subTitle: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/mock/turnup_backoffice.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹'],
  },
  {
    title: '턴업 랜딩페이지',
    slug: 'turnup_web',
    subTitle: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/mock/turnup_web.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹'],
  },
  {
    title: '턴업 서버 & AI 개발',
    slug: 'turnup_backend',
    subTitle: '영상, 이미지기반 상품검색 서비스 플랫폼',
    image: '/mock/turnup_backend.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['백엔드', 'AI'],
    filter: ['백엔드', 'AI'],
  },
  {
    title: '라이즈 APP 랜딩페이지',
    slug: 'rise_landing',
    subTitle: '라이브커머스 통합 플랫폼',
    image: '/mock/rise_app_landing.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 인사이드 (테스트 프로덕트)',
    slug: 'rise_inside',
    subTitle: '턴업 프로젝트의 시장 테스트 프로덕트',
    image: '/mock/rise_inside.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 APP',
    slug: 'rise_app',
    subTitle: '라이브커머스 통합 플랫폼',
    image: '/mock/rise_app.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 백오피스',
    slug: 'rise_bo',
    subTitle: '라이브커머스 통합 플랫폼',
    image: '/mock/rise_backoffice.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '웹'],
  },
  {
    title: '라이즈 백엔드',
    slug: 'rise_backend',
    subTitle: '라이브커머스 통합 플랫폼',
    image: '/mock/rise_backend.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 스튜디오 v2',
    slug: 'rise_studio_v2',
    subTitle: '라이브커머스 통합 플랫폼',
    image: '/mock/rise_studio_v2.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '라이즈 스튜디오 v1',
    slug: 'rise_studio_v1',
    subTitle: '라이브커머스 통합 플랫폼',
    image: '/mock/rise_studio_v1.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
  {
    title: '패스터',
    slug: 'faster',
    subTitle: '동대문 도매상인을 위한 중국 수출입 플랫폼',
    image: '/mock/faster.png',
    image2: '/realiz.png',
    stacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['웹', '모바일', 'CRX', '서버'],
    filter: ['프론트엔드', '앱'],
  },
];
