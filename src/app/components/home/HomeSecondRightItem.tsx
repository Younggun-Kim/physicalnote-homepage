import Image from 'next/image';
import styled from 'styled-components';

interface HomeSecondRightItemProps {
  text: string;
  hasUpIcon: boolean;
  isPrimary: boolean;
  percent: number;
  className?: string; // className prop 추가
}

export const HomeSecondRightItem = ({
  text,
  hasUpIcon,
  percent,
  className, // className prop 받기
}: HomeSecondRightItemProps) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-[9px] mb-[5px]">
        <span className="title">{text}</span>
        {hasUpIcon && (
          <Image
            src="/icons/up.svg"
            alt="up"
            width={29}
            height={27}
          />
        )}
      </div>
      <span className="percent">{`${percent}%`}</span>
    </div>
  );
};

export default HomeSecondRightItem;

export const StyledHomeSecondRightItem = styled(HomeSecondRightItem)`
  & .title {
    font-family: 'Noto Sans', sans-serif;
    font-weight: ${(props) => (props.isPrimary ? 900 : 500)};
    color: ${(props) => (props.isPrimary ? 'var(--primary)' : 'var(--gray2)')};
    font-size: 0.875rem;
  }

  & .percent {
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    color: ${(props) => (props.isPrimary ? 'var(--primary)' : '#d9d9d9')};
    font-size: 2.875rem;
  }

  @media (min-width: 1921px) {
    & .title {
      font-size: 1.5rem;
    }

    & .percent {
      font-size: 6rem;
    }
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    & .title {
      font-size: 1.5rem;
    }

    & .percent {
      font-size: 6rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    & .title {
      font-size: 1.25rem;
    }

    & .percent {
      font-size: 5.375rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & .percent {
      font-size: 3.125rem;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
