import styled from 'styled-components';

export const WithoutBtn = () => {
  return <StyledBtn>탈퇴</StyledBtn>;
};

export default WithoutBtn;

const StyledBtn = styled.button`
  color: var(--gray1);
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.6px;

  @media (min-width: 1921px) {
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 426px) and (max-width: 768px) {
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
