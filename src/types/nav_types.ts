type NavItemType = {
  href: string;
  label: string;
};

/** 헤더 네비게이션 목록 */
export const HEADER_LINKS: NavItemType[] = [
  { href: '/', label: '홈' },
  { href: '/detail', label: '상세내용' },
  { href: '/pricing', label: '가격안내' },
  // { href: '/notice', label: '공지사항' },
];

export default HEADER_LINKS;

/** 마이페이지 네비게이션 목록 */
export const MY_PAGE_LINKS: NavItemType[] = [
  { href: '/mypage/profile', label: '내정보 수정' },
  { href: '/mypage/team', label: '소속 관리' },
  { href: '/mypage/subscribe', label: '구독 설정' },
];

/** 서비스 약관 */
export const TERM_LINKS: NavItemType[] = [
  { href: 'https://chain-twist-c37.notion.site/16f99c0f7bd380938c42e50912f627c7?pvs=4', label: '서비스 이용약관' },
  { href: 'https://chain-twist-c37.notion.site/16f99c0f7bd3803295b9f53593f3c176?pvs=4', label: '개인정보 처리방침' },
  {
    href: 'https://chain-twist-c37.notion.site/16f99c0f7bd380d6883bffc02acb3c8e?pvs=4',
    label: '전자금융거래 기본약관',
  },
];
