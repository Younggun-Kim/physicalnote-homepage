import styled from 'styled-components';

export const LoginTitle = styled.h1`
  margin-top: 64px;
  margin-bottom: 48px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--gray1);

  @media (min-width: 769px) {
    margin-top: 180px;
    margin-bottom: 40px;
    font-size: 2rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    margin-top: 187px;
    margin-bottom: 44px;
    font-size: 1.5rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    margin-top: 100px;
  }
`;

export default LoginTitle;