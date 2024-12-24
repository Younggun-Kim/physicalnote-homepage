'use client';
import styled from 'styled-components';

export default function DetailSecond() {
  return <StyledContainer></StyledContainer>;
}

const StyledContainer = styled.img`
  width: 100%;
  height: 680px;
  margin: 0 auto;
  content: url('/images/detail/detail_2_320.png');

  @media (min-width: 1921px) {
    max-width: 2560px;
    height: 1080px;
    content: url('/images/detail/detail_2_2560.png');
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    height: 1080px;
    content: url('/images/detail/detail_2_1920.png');
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    height: 860px;
    content: url('/images/detail/detail_2_1440.png');
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 860px;
    content: url('/images/detail/detail_2_1024.png');
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 690px;
    content: url('/images/detail/detail_2_768.png');
  }

  @media (min-width: 321px) and (max-width: 425px) {
    height: 680px;
    content: url('/images/detail/detail_2_425.png');
  }
`;
