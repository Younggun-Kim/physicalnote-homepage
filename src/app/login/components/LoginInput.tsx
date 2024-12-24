'use client';

import Input from '@/app/components/input/Input';
import styled from 'styled-components';

export const LoginInput = styled(Input)`
  width: 100%;
  max-width: 260px;
  height: 40px;
  font-feature-settings: 'calt' off;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.6px;
  color: black;
  padding: 0 20px;

  &::placeholder {
    color: var(--gray2);
  }

  @media (min-width: 769px) {
    max-width: 320px;
    font-size: 14px;
    height: 48px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    max-width: 300px;
    font-size: 14px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    max-width: 300px;
    font-size: 14px;
  }
`;

export default LoginInput;
