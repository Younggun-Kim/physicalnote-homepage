import styled from 'styled-components';

export const PaymentField = styled.span`
  color: var(--gray2);
  font-feature-settings: 'calt' off;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.6px;

  @media (min-width: 321px) {
    font-size: 14px;
  }
`;

export default PaymentField;
