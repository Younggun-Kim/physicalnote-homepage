import styled from 'styled-components';

export const MyPageContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    padding: 100px;
    gap: 100px;
    justify-content: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: row;
    padding: 70px 95px;
    gap: 70px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;

export default MyPageContainer;
