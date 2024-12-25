'use client';

import styled from 'styled-components';

export default function PaymentSuccessDesc() {
  return (
    <StyledSpan>
      구독이 완료되었습니다!
      <br />
      해당 링크로 접속하시면 피지컬노트 사용이 가능합니다.
    </StyledSpan>
  );
}
const StyledSpan = styled.span`
  color: var(--gray1);
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 40px;

  @media (min-width: 321px) {
    font-size: 14px;
  }
`;
