'use client';

import Link from 'next/link';
import styled from 'styled-components';

export default function FindAccount() {
  return (
    <StyledLink href={'/findAccount'}>
      <span>아이디/비밀번호찾기</span>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  color: var(--gray1);
  text-align: right;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  margin-left: auto;
  display: inline-block;
  width: 100%;

  @media (min-width: 769px) {
    font-size: 14px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    font-size: 12px;
  }
`;
