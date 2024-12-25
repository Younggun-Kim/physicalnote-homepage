'use client';

import styled from 'styled-components';
import Link from 'next/link';

export default function PaymentSuccessLink() {
  return (
    <StyledSpan
      target="_blank"
      href={'https://coach.physicalnote.com/login'}
    >
      https://coach.physicalnote.com/login
    </StyledSpan>
  );
}
const StyledSpan = styled(Link)`
  color: var(--primary);
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  margin-top: 56px;

  @media (min-width: 321px) {
    font-size: 16px;
  }
`;
