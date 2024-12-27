import styled from 'styled-components';
import Image from 'next/image';

export function HomeThirdItemFirst() {
  return (
    <StyledDiv className="flex flex-col justify-start items-center">
      <Image
        src="/images/home/home_3_2.png"
        alt=""
        width={369}
        height={274}
      />
      <p className="title">
        <span>웰니스 체크를 통해 해당 스포츠에</span>
        <br />
        <span>특화된 몸을 가꾸어 보세요</span>
      </p>
      <p className="description">
        <span>건강한 신체와 정신은</span>
        <br />
        <span>운동 선수의 수명을 연장시킵니다.</span>
      </p>
    </StyledDiv>
  );
}

export default HomeThirdItemFirst;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  & img {
    width: 144px;
    height: 108px;
    margin-bottom: 13px;
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
      width: 369px;
      height: 274px;
      margin-bottom: 70px;
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
      width: 369px;
      height: 274px;
      margin-bottom: 70px;
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
      width: 369px;
      height: 274px;
      margin-bottom: 70px;
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
      width: 221px;
      height: 165px;
      margin-bottom: 40px;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    & img {
      width: 221px;
      height: 165px;
      margin-bottom: 18px;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
