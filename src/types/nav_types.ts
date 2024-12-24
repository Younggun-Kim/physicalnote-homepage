type NavItemType = {
  href: string;
  label: string;
};

/** 헤더 네비게이션 목록 */
export const HEADER_LINKS: NavItemType[] = [
  { href: '/', label: '홈' },
  { href: '/detail', label: '상세내용' },
  { href: '/pricing', label: '가격안내' },
  { href: '/notice', label: '공지사항' },
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
  { href: '/policy/term', label: '서비스 이용약관' },
  { href: '/policy/privacy', label: '개인정보 처리방침' },
  { href: '/policy/financial', label: '전자금융거래 기본약관' },
];
