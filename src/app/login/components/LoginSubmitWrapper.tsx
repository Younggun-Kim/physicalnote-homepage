'use client';

import styled from 'styled-components';

export const LoginSubmitWrapper = styled.div`
  max-width: 260px;
  width: 100%;

  @media (min-width: 769px) {
    max-width: 320px;
    font-size: 14px;
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

export default LoginSubmitWrapper;
