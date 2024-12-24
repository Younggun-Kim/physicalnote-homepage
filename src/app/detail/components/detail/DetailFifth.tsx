'use client';
import styled from 'styled-components';

export default function DetailFifth() {
  return <StyledContainer></StyledContainer>;
}

const StyledContainer = styled.img`
  width: 100%;
  height: 900px;
  margin: 0 auto;
  content: url('/images/detail/detail_5_320.png');

  @media (min-width: 1921px) {
    max-width: 2560px;
    height: 1285px;
    content: url('/images/detail/detail_5_2560.png');
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    height: 1285px;
    content: url('/images/detail/detail_5_1920.png');
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    height: 1320px;
    content: url('/images/detail/detail_5_1440.png');
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 1910px;
    content: url('/images/detail/detail_5_1024.png');
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 1705px;
    content: url('/images/detail/detail_5_768.png');
  }

  @media (min-width: 321px) and (max-width: 425px) {
    height: 1020px;
    content: url('/images/detail/detail_5_425.png');
  }
`;
