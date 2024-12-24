import styled from 'styled-components';

export function HomeThirdItemThird() {
  return (
    <StyledDiv className="flex flex-col justify-start items-center">
      <img
        src="/images/home/home_3_3.png"
        alt=""
      />
      <p className="title">
        <span>혼자 해결하기 어려운 문제는</span>
        <br />
        <span>전문가와 함께 해결하세요</span>
      </p>
      <p className="description">
        <span>여러분 곁에 든든한 운동 전문가 및</span>
        <br />
        <span>스포츠사이언티스트가 항시 대기하고 있습니다.</span>
      </p>
    </StyledDiv>
  );
}

export default HomeThirdItemThird;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  & img {
    width: 128px;
    height: 121px;
    margin-bottom: 60px;
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
      width: 300px;
      height: 283px;
      margin-bottom: 67px;
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
      width: 300px;
      height: 283px;
      margin-bottom: 67px;
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
      width: 300px;
      height: 283px;
      margin-bottom: 67px;
    }

    & .title {
      font-size: 1.25rem;
    }

    & .description {
      font-size: 1rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & img {
      width: 180px;
      height: 170px;
      margin-bottom: 40px;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    & img {
      width: 180px;
      height: 170px;
      margin-bottom: 30px;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
