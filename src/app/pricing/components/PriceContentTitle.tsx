'use client';
import styled from 'styled-components';

export default function PriceContentTitle() {
  return (
    <StyledH2>
      피지컬 노트 전문가들과 함께
      <br />
      선수들을 관리해보세요!
    </StyledH2>
  );
}

const StyledH2 = styled.h2`
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.75rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
