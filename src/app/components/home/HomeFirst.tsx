'use client';
import styled from 'styled-components';

export const HomeFirst = () => {
  return (
    <div className="w-full">
      <StyledImage />
    </div>
  );
};

export default HomeFirst;

const StyledImage = styled.img`
  width: 100%;
  height: 392px;
  object-fit: cover;
  content: url('/images/home/home_1_320.png');

  @media (min-width: 1921px) {
    content: url('/images/home/home_1_2560.png');
    height: 767px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    content: url('/images/home/home_1_1920.png');
    height: 767px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    content: url('/images/home/home_1_1440.png');
    height: 767px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    content: url('/images/home/home_1_1024.png');
    height: 767px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    content: url('/images/home/home_1_768.png');
    height: 494px;
    margin-top: 40px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    content: url('/images/home/home_1_425.png');
    height: 392px;
  }
`;
