'use client';
import styled from 'styled-components';
import PriceContentRefundDescriptionFirst from '@/app/pricing/components/PriceContentRefundDescriptionFirst';
import PriceContentRefundDescriptionSecond from '@/app/pricing/components/PriceContentRefundDescriptionSecond';

export default function PriceContentRefund() {
  return (
    <StyledDiv>
      <h6>환불정책</h6>
      <div className="flex flex-col justify-start items-start">
        <span className="title">제 19조 결제취소 & 환불</span>
        <PriceContentRefundDescriptionFirst />
        <div className="gap"></div>
        <span className="title">제 3조 환불소요기간</span>
        <PriceContentRefundDescriptionSecond />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  padding: 40px 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  & h6 {
    color: black;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 40px;
  }

  & .title {
    color: var(--gray1);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 18px;
  }

  & .gap {
    height: 68px;
  }

  @media (min-width: 1921px) {
    padding-top: 78px;
    flex-direction: row;
    gap: 82px;
    margin-left: 60px;

    & h6 {
      font-size: 2rem;
      margin-bottom: 32px;
    }

    & .title {
      font-size: 1.5rem;
    }

    & .gap {
      height: 62px;
    }
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    padding-top: 78px;
    flex-direction: row;
    gap: 82px;
    margin-left: 60px;

    & h6 {
      font-size: 2rem;
      margin-bottom: 32px;
    }

    & .title {
      font-size: 1.5rem;
    }

    & .gap {
      height: 62px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding-top: 78px;
    flex-direction: row;
    gap: 82px;
    margin-left: 60px;

    & h6 {
      font-size: 2rem;
      margin-bottom: 32px;
    }

    & .title {
      font-size: 1.5rem;
    }

    & .gap {
      height: 62px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-top: 78px;
    width: auto;
    margin: 0 auto;

    & h6 {
      font-size: 1.75rem;
      margin-bottom: 32px;
    }

    & .title {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    & h6 {
      font-size: 1.75rem;
      margin-bottom: 32px;
    }

    & .title {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
