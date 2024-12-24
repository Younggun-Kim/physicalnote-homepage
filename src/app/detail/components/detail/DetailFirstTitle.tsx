import styled from 'styled-components';

export default function DetailFirstTitle() {
  return (
    <StyledContainer>
      <span>한눈에 내용을 확인하고 분석하세요.</span>
      <h6 className="">시간을 효율적으로 사용할 수 있습니다.</h6>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;

  & span {
    color: var(--primary);
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & h6 {
    color: black;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (min-width: 1921px) {
    & span {
      font-size: 1.5rem;
    }

    & h6 {
      font-size: 2rem;
    }

    margin-bottom: 110px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    & span {
      font-size: 1.5rem;
    }

    & h6 {
      font-size: 2rem;
    }

    margin-bottom: 110px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    & span {
      font-size: 1.5rem;
    }

    & h6 {
      font-size: 2rem;
    }

    margin-bottom: 110px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & span {
      font-size: 1.5rem;
    }

    & h6 {
      font-size: 2rem;
    }

    margin-bottom: 110px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    & span {
      font-size: 1.25rem;
    }

    & h6 {
      font-size: 1.5rem;
    }

    margin-bottom: 120px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
