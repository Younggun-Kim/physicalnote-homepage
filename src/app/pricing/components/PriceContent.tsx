'use client';
import styled from 'styled-components';
import PriceContentTitle from './PriceContentTitle';
import PriceContentDescription from './PriceContentDescription';
import PriceContentCards from './PriceContentCards';
import PriceContentFaq from '@/app/pricing/components/PriceContentFaq';
import { useMediaQuery } from 'usehooks-ts';

export default function PriceContent() {
  const isMobile = useMediaQuery('(max-width: 425px)');

  return (
    <StyledContainer>
      <StyledContentWrapper>
        <PriceContentTitle />
        <PriceContentDescription />
      </StyledContentWrapper>
      <div>
        <PriceContentCards />
        {!isMobile && <PriceContentFaq />}
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  padding: 0 0 40px;

  @media (min-width: 1921px) {
    max-width: 2560px;
    padding: 200px 50px 111px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 148px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    padding: 200px 50px 111px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 200px 50px 111px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    align-items: start;
    padding-top: 80px;
    padding-left: 20%;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    align-items: center;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
