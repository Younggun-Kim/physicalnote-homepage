'use client';

import styled from 'styled-components';
import HomeThirdItemFirst from '@/app/components/home/HomeThirdItemFirst';
import HomeThirdItemSecond from './HomeThirdItemSecond';
import HomeThirdItemThird from '@/app/components/home/HomeThirdItemThird';
import HomeThirdBtn from './HomeThirdIBtn';

export function HomeThird() {
  return (
    <HomeThirdDiv>
      <div className="item-wrapper">
        <HomeThirdItemFirst />
        <HomeThirdItemSecond />
        <HomeThirdItemThird />
      </div>
      <HomeThirdBtn />
    </HomeThirdDiv>
  );
}

export default HomeThird;

const HomeThirdDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 104px;
  padding: 40px 20px 20px;

  & .item-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media (min-width: 1921px) {
    & .item-wrapper {
      flex-direction: row;
      gap: 140px;
    }

    gap: 180px;
    padding: 130px 50px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    & .item-wrapper {
      flex-direction: row;
      gap: 140px;
    }

    gap: 180px;
    padding: 130px 50px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    & .item-wrapper {
      flex-direction: row;
      justify-content: space-between;
    }

    gap: 180px;
    padding: 130px 50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & .item-wrapper {
      flex-direction: row;
      gap: 50px;
    }

    gap: 132px;
    padding-top: 121px;
    padding-bottom: 64px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    & .item-wrapper {
      gap: 55px;
    }

    gap: 82px;
    padding-top: 114px;
    padding-bottom: 78px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    padding-top: 40px;
  }
`;
