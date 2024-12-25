import styled from 'styled-components';

export const MyPageUserName = styled.span`
  color: var(--black, #000);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.8px;
  flex: 1;

  &::after {
    content: '님';
    font-size: 10px;
    font-style: normal;
  }

  @media (min-width: 426px) {
    font-size: 1.25rem;
    &::after {
      font-size: 0.875rem;
    }

    text-align: center;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;

export default MyPageUserName;
