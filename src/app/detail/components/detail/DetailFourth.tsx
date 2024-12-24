'use client';
import styled from 'styled-components';

export default function DetailFourth() {
  return <StyledContainer></StyledContainer>;
}

const StyledContainer = styled.img`
  width: 100%;
  height: 438px;
  margin: 0 auto;
  content: url('/images/detail/detail_4_320.png');

  @media (min-width: 1921px) {
    max-width: 2560px;
    height: 1523px;
    content: url('/images/detail/detail_4_2560.png');
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    height: 1523px;
    content: url('/images/detail/detail_4_1920.png');
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    height: 1370px;
    content: url('/images/detail/detail_4_1440.png');
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 1050px;
    content: url('/images/detail/detail_4_1024.png');
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 885px;
    content: url('/images/detail/detail_4_768.png');
  }

  @media (min-width: 321px) and (max-width: 425px) {
    height: 515px;
    content: url('/images/detail/detail_4_425.png');
  }
`;
