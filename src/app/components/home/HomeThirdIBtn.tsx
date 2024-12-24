import Link from 'next/link';
import styled from 'styled-components';
import { useAppStore } from '@/store';

export function HomeThirdBtn() {
  const { isLoggedIn } = useAppStore((store) => store.state);
  return (
    <Link href={isLoggedIn ? '/mypage' : '/login'}>
      <StyledDiv className="rounded-full">시작하기</StyledDiv>
    </Link>
  );
}

export default HomeThirdBtn;

const StyledDiv = styled.button`
  font-size: 1.625rem;
  color: white;
  font-weight: bold;
  font-family: 'Noto Sans', sans-serif;
  padding: 20px 38px;
  background-color: var(--primary);

  @media (min-width: 1921px) {
    padding: 27px 48px;
    font-size: 3rem;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    padding: 27px 48px;
    font-size: 3rem;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 27px 48px;
    font-size: 3rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.1875rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 1.875rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
