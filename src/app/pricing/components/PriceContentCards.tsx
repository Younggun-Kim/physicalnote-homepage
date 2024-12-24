'use client';
import styled from 'styled-components';

export default function PriceContentCards() {
  return (
    <StyledContainer>
      <img
        className="month"
        src="/images/price/price_month_h.svg"
        alt="월 구독"
      />
      <img
        className="year"
        src="/images/price/price_year_h.svg"
        alt="연 구독"
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  & .month {
    width: 300px;
    height: 149px;
  }

  & .year {
    width: 300px;
    height: 149px;
  }

  @media (min-width: 1921px) {
    flex-direction: row;
    align-items: end;
    gap: 45px;

    & .month {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_month_v.svg');
    }

    & .year {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_year_v.svg');
    }
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    flex-direction: row;
    align-items: end;
    gap: 45px;

    & .month {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_month_v.svg');
    }

    & .year {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_year_v.svg');
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    flex-direction: row;
    align-items: end;
    gap: 45px;

    & .month {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_month_v.svg');
    }

    & .year {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_year_v.svg');
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    align-items: end;
    gap: 45px;

    & .month {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_month_v.svg');
    }

    & .year {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_year_v.svg');
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: row;
    align-items: end;
    gap: 45px;

    & .month {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_month_v.svg');
    }

    & .year {
      width: 280px;
      height: 360px;
      content: url('/images/price/price_year_v.svg');
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
