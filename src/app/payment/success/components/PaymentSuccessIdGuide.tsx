'use client';

import styled from 'styled-components';

export default function PaymentSuccessIdGuide(): JSX.Element {
  return <StyledSpan>회원정보는 홈페이지 아이디/비밀번호와 동일합니다.</StyledSpan>;
}
const StyledSpan = styled.span`
  color: var(--gray1);
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 321px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;
