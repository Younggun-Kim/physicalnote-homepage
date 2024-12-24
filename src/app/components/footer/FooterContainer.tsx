'use client';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 40px 12px;
  gap: 1rem;

  @media (min-width: 1921px) {
    flex-direction: column;
    padding: 40px 130px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    flex-direction: column;
    padding: 40px 130px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 40px 112px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 40px 112px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 40px 60px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    padding: 40px 30px;
  }
`;

export default FooterContainer;
