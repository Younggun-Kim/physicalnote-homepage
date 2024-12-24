'use client';
import styled from 'styled-components';

export default function PriceContentFaq() {
  return (
    <StyledContainer>
      {/* TODO: 문의하기 버튼 추가*/}
      {/*<MoveFaqButton />*/}
      {/*<span>협의가 필요할 경우 문의해 주세요.</span>*/}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  gap: 11px;
  margin-top: 30px;

  & > span {
    color: var(--gray2);
    text-align: right;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

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
