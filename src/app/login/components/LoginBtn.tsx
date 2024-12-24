'use client';

import styled from 'styled-components';
import Button from '@/app/components/Button';

export const LoginBtn = styled(Button)`
  width: 100%;
  max-width: 260px;
  height: 40px;
  color: var(--gray1);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 769px) {
    max-width: 320px;
    font-size: 14px;
    height: 48px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    max-width: 300px;
    font-size: 1rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    max-width: 300px;
    font-size: 1rem;
  }
`;

export default LoginBtn;
