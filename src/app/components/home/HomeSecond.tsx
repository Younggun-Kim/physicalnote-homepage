'use client';

import HomeSecondLeft from '@/app/components/home/HomeSecondLeft';
import styled from 'styled-components';
import HomeSecondRight from './HomeSecondRight';

export const HomeSecond = () => {
  return (
    <div className="w-full max-w-[2560px] relative">
      <StyledDiv>
        <HomeSecondLeft />
        <HomeSecondRight />
      </StyledDiv>
    </div>
  );
};

export default HomeSecond;

const StyledDiv = styled.div`
  position: relative;
  padding-top: 37px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 50px;

  @media (min-width: 1921px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 200px;
    padding: 150px 0 0 460px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 200px;
    padding: 150px 0 0 140px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 150px;
    margin: 0 auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 150px;
    margin: 0 auto;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 100px 50px 0 50px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
