import { Noto_Sans_KR } from 'next/font/google';

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'], // 라틴 문자 지원
  weight: ['100', '300', '400', '500', '700', '900'], // 사용할 폰트 굵기
  display: 'swap', // 폰트 로딩 전략
  preload: true, // 폰트 미리 로드
  variable: '--font-noto-sans-kr', // CSS 변수명
  fallback: ['system-ui', 'arial'],
});

export default notoSansKr;
