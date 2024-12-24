'use client';
import styled from 'styled-components';
import DetailFirstTitle from './DetailFirstTitle';
import DetailFirstContent from './DetailFirstContent';

export default function DetailFirst() {
  return (
    <StyledContainer>
      <DetailFirstTitle />
      <DetailFirstContent />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 20px 35px;

  @media (min-width: 1921px) {
    padding: 113px 20px 151px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    padding: 113px 20px 151px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 113px 20px 151px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 113px 20px 67px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 113px 20px 67px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    padding: 65px 20px 35px;
  }
`;
