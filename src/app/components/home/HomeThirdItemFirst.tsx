import styled from 'styled-components';

export function HomeThirdItemFirst() {
  return (
    <StyledDiv className="flex flex-col justify-start items-center">
      <img
        src="/images/home/home_3_1.png"
        alt=""
      />
      <p className="title">
        <span>그 날의 자가 컨디션 진단 설문과</span>
        <br />
        <span>훈련 강도 및 빈도를 기록하세요</span>
      </p>
      <p className="description">
        <span>여러분들의 훈련 주기화를 계획 하는데 도움이 되고,</span>
        <br />
        <span>번아웃(burn-out)증상을 효과적으로 예방할 수 있습니다. </span>
      </p>
    </StyledDiv>
  );
}

export default HomeThirdItemFirst;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  & img {
    width: 165px;
    height: 172px;
    margin-bottom: 40px;
  }

  & .title {
    font-family: 'Noto Sans', sans-serif;
    font-size: 0.875rem;
    color: black;
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
  }

  & .description {
    font-family: 'Noto Sans', sans-serif;
    font-size: 0.625rem;
    color: var(--gray1);
    text-align: center;
    font-weight: 400;
  }

  @media (min-width: 1921px) {
    & img {
      width: 275px;
      height: 283px;
      margin-bottom: 77px;
    }

    & .title {
      font-size: 1.25rem;
    }

    & .description {
      font-size: 1rem;
    }
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    & img {
      width: 275px;
      height: 283px;
      margin-bottom: 77px;
    }

    & .title {
      font-size: 1.25rem;
    }

    & .description {
      font-size: 1rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    & img {
      width: 275px;
      height: 283px;
      margin-bottom: 77px;
    }

    & .title {
      font-size: 1.25rem;
    }

    & .description {
      font-size: 1rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 426px) and (max-width: 768px) {
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
