'use client';
import { StyledHomeSecondRightItem } from './HomeSecondRightItem';
import styled from 'styled-components';

export const HomeSecondRight = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <StyledH6>부상의 직접적인 이유 Top 4</StyledH6>
      <StyledSpan>[ 출처 : 체육포털_2019년 스포츠안전사고 실태조사 ]</StyledSpan>

      <div className="grid grid-cols-2 gap-x-12 gap-y-[30px]">
        <StyledHomeSecondRightItem
          text="오버트레이닝"
          hasUpIcon={true}
          isPrimary={true}
          percent={48}
        />
        <StyledHomeSecondRightItem
          text="사람과의 충돌"
          hasUpIcon={false}
          isPrimary={false}
          percent={24}
        />
        <StyledHomeSecondRightItem
          text="미끄러져 넘어짐"
          hasUpIcon={false}
          isPrimary={false}
          percent={11}
        />
        <StyledHomeSecondRightItem
          text="기타(자신의 실수)"
          hasUpIcon={false}
          isPrimary={false}
          percent={17}
        />
      </div>
    </div>
  );
};

export default HomeSecondRight;

const StyledH6 = styled.h6`
  font-weight: 700;
  font-family: 'Noto Sans', sans-serif;
  color: black;
  font-size: 0.75rem;
  margin-bottom: 2px;

  @media (min-width: 1921px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 1.125rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.75rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    font-size: 0.75rem;
  }
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-family: 'Noto Sans', sans-serif;
  color: var(--gray2);
  font-size: 0.5rem;
  margin-bottom: 44px;

  @media (min-width: 1921px) {
    font-size: 0.75rem;
    margin-bottom: 49px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    font-size: 0.75rem;
    margin-bottom: 49px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 0.625rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.5rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 0.5rem;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    font-size: 0.5rem;
  }
`;
