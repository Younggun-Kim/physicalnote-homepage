import styled from 'styled-components';
import { useMediaQuery } from 'usehooks-ts';
import DetailFirstContentItem from './DetailFirstContentItem';

export default function DetailFirstContent() {
  const isVertical = useMediaQuery('(max-width: 425px)');

  return (
    <StyledContainer>
      {isVertical && (
        <img
          src="/images/detail/detail_1_mobile.png"
          alt=""
        />
      )}
      {!isVertical && (
        <img
          src="/images/detail/detail_1.png"
          alt=""
        />
      )}
      <div className="content">
        <DetailFirstContentItem
          title={'운동선수'}
          description={'선수들이 앱을 통해 스스로 컨디션 관리를 할 수 있습니다.'}
          description2={'또한, 팀 코칭스탭에게 편하게 관리 받을 수 있어요.'}
        />
        <DetailFirstContentItem
          title={'지도자'}
          description={'만약 코칭스태프(감독,코치,피지컬코치) 및 의무트레이너라면'}
          description2={'내 소속팀 선수들의 컨디션을 편리하게 관리할 수 있어요.'}
        />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  & img {
    width: 109px;
    height: 269px;
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 70px;
  }

  @media (min-width: 1921px) {
    & img {
      width: 942px;
      height: 387px;
    }

    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

    & .content {
      margin: 0 100px;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    & img {
      width: 942px;
      height: 387px;
    }

    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

    & .content {
      flex-direction: row;
      justify-content: space-between;
      gap: 400px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    & img {
      width: 942px;
      height: 387px;
    }

    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 0;

    & .content {
      width: 100%;
      padding: 0 100px;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & img {
      width: 688px;
      height: 280px;
    }

    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 50px;

    & .content {
      margin: 0 100px;
      flex-direction: row;
      gap: 56px;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    & img {
      width: 475px;
      height: 193px;
    }

    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 50px;

    & .content {
      margin: 0 100px;
      flex-direction: row;
      gap: 48px;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
