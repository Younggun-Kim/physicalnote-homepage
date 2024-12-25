import styled from 'styled-components';

export const MyEmail = styled.span`
  color: var(--black, #000);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.6px;
  width: 100%;
  text-align: start;

  @media (min-width: 426px) {
    font-size: 0.875rem;
    text-align: center;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;

export default MyEmail;
