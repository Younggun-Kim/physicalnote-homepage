import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
  description2: string;
}

export default function DetailFirstContentItem({ title, description, description2 }: Props) {
  return (
    <StyledContainer>
      <span className="title">{title}</span>
      <span className="description">{description}</span>
      <span className="description">{description2}</span>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  & .title {
    color: var(--primary);
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
  }

  & .description {
    color: var(--gray1);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
  }

  @media (min-width: 1921px) {
    align-items: center;

    & .title {
      font-size: 1.25rem;
    }

    & .description {
      font-size: 1rem;
    }
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    align-items: center;

    & .title {
      font-size: 1.25rem;
    }

    & .description {
      font-size: 1rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    align-items: center;

    & .title {
      font-size: 1.25rem;
    }

    & .description {
      font-size: 1rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    align-items: center;

    & .title {
      font-size: 1.25rem;
    }

    & .description {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    align-items: center;

    & .title {
      font-size: 1rem;
    }

    & .description {
      font-size: 0.625rem;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
