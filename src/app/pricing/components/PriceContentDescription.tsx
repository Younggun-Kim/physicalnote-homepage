'use client';
import styled from 'styled-components';

export default function PriceContentDescription() {
  return (
    <StyledP>
      프로팀 그 이상의 퀄리티 있는 팀 운영을 희망하십니까?
      <br />
      하지만, 타이트한 예산과 인력 부족으로 쉽지 않으셨을 겁니다.
      <br />
      <br />
      저희 &#39;피지컬노트&#39;가 그 고민들을 해결해 드리고자
      <br />
      지도자 및 트레이너 여러분들께 찾아왔습니다.
      <br />
      여러분들을 이 시대에 최고의 인재로 만들어 드리겠습니다.
    </StyledP>
  );
}

const StyledP = styled.p`
  color: var(--gray1);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 1rem;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    font-size: 1rem;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 0.875rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.75rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
