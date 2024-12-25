import styled from 'styled-components';

export const PlanItemPricePeriod = styled.span`
  color: var(--primary);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 769px) {
    font-size: 16px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    font-size: 12px;
  }
`;

export default PlanItemPricePeriod;
