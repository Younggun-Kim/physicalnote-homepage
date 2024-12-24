'use client';
import styled from 'styled-components';

export default function DetailSix() {
  return <StyledContainer></StyledContainer>;
}

const StyledContainer = styled.img`
  width: 100%;
  height: 1260px;
  margin: 0 auto;
  content: url('/images/detail/detail_3_320.png');

  @media (min-width: 1921px) {
    max-width: 2560px;
    height: 1080px;
    content: url('/images/detail/detail_3_2560.png');
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    height: 1080px;
    content: url('/images/detail/detail_3_1920.png');
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    height: 1415px;
    content: url('/images/detail/detail_3_1440.png');
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 1160px;
    content: url('/images/detail/detail_3_1024.png');
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 1270px;
    content: url('/images/detail/detail_3_768.png');
  }

  @media (min-width: 321px) and (max-width: 425px) {
    height: 1340px;
    content: url('/images/detail/detail_3_425.png');
  }
`;
