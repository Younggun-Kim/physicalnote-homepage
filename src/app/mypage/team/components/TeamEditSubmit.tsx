'use client';

import styled from 'styled-components';
import { toast } from 'react-toastify';
import { isTeamEditStateValid, toPutRequestDto, useTeamEditStore } from '@/store';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import useCoachInfoStore from '@/store/coachInfoStore';
import usePutCoachInfo from '@/networks/query/coach/put/usePutCoachInfo';

export default function TeamEditSubmit() {
  const state = useTeamEditStore((store) => store.state);
  const { onSet } = useCoachInfoStore((store) => store.actions);

  const coachInfoMutation = usePutCoachInfo();

  const handleClick = async () => {
    try {
      const response = await coachInfoMutation.mutateAsync(toPutRequestDto(state));
      onSet(response);
      toast('수정이 완료되었습니다.');
    } catch (e) {}
  };
  return (
    <StyledDiv>
      <EnabledBtn
        containerClassName="w-full"
        className="w-full h-full"
        text="수정"
        isEnabled={isTeamEditStateValid(state)}
        onClick={handleClick}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 30px;

  & button {
    color: var(--gray2);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 19.2px */
    letter-spacing: -0.6px;
  }

  @media (min-width: 769px) {
    max-width: 320px;
    & button {
      font-size: 1.25rem;
    }

    height: 48px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    max-width: 300px;
    & button {
      font-size: 1rem;
    }

    gap: 16px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    max-width: 300px;
    & button {
      font-size: 1rem;
    }

    gap: 8px;
  }
`;
