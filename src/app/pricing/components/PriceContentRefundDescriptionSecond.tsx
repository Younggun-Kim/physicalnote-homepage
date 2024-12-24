'use client';
import styled from 'styled-components';

export default function PriceContentRefundDescriptionSecond() {
  return (
    <StyledP>
      <span>
        환불 신청 확인 후 7영업일 이내에 환불을 완료하며, 결제 수단에 따라 결제 업체의 사정으로 지연될 수 있습니다.
      </span>
    </StyledP>
  );
}

const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
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
    font-size: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
