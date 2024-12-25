import styled from 'styled-components';

export const MyPageTitle = styled.h1`
  color: var(--gray1);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 769px) {
    font-size: 2rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;

export default MyPageTitle;
