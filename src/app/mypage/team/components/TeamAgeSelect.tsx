'use client';
import React from 'react';
import { ageDropDownOptions, AgeEnum } from '@/types';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import styled from 'styled-components';
import Dropdown from '@/app/components/dropdown/Dropdown';

export default function TeamAgeSelect() {
  const teamEditState = useTeamEditStore((store) => store.state);
  const { teamAge, teamValidateErrorVisible, teamValidateErrorMsg, isTeamValidate } = teamEditState;
  const { onChangeTeamAge } = useTeamEditStore((store) => store.actions);
  // const teamValidateMutation = useTeamValidate();

  // const handleClick = async () => {
  //   if (!canTeamValidCheck(teamEditState)) {
  //     alert('입력값을 확인해주세요.');
  //     return;
  //   }
  //
  //   try {
  //     const result = await teamValidateMutation.mutateAsync(toTeamValidRequestDto(teamEditState));
  //
  //     onChangeIsTeamValidate(result.valid);
  //     onChangeTeamValidateMsg(result.valid ? '' : result.message);
  //   } catch (e) {
  //     onChangeIsTeamValidate(false);
  //   }
  // };

  return (
    <div className="w-full flex flex-col">
      <FieldWrapper>
        <FieldTitle text={'연령대'} />
        <div className="w-100">
          <TeamAgeSelectStyledDropdown
            className="w-full"
            placeholder="선택"
            options={ageDropDownOptions}
            selectedOption={teamAge}
            onSelect={onChangeTeamAge}
            hasRightBtn={true}
            // onRightClick={handleClick}
            onRightClick={() => {}}
            rightBtnText={'중복확인'}
          />
        </div>
      </FieldWrapper>

      {teamValidateErrorVisible.isVisible() && (
        <FieldWrapper>
          <FieldTitle></FieldTitle>
          <span
            className={'font-sans font-normal text-[0.625rem] text-red tracking-tighter'}
          >{`${teamValidateErrorMsg}`}</span>
        </FieldWrapper>
      )}

      {isTeamValidate && (
        <FieldWrapper>
          <FieldTitle></FieldTitle>
          <span className={'font-sans font-normal text-[0.625rem] text-primary'}>{'등록 가능한 팀입니다.'}</span>
        </FieldWrapper>
      )}
    </div>
  );
}

export const TeamAgeSelectStyledDropdown = styled(Dropdown<AgeEnum>)`
  width: 100%;
  max-width: 260px;

  @media (min-width: 769px) {
    max-width: 320px;
    height: 48px;
    & .name {
      font-size: 14px;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    max-width: 300px;
    & .name {
      font-size: 14px;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
    max-width: 300px;
    & .name {
      font-size: 14px;
    }
  }
`;
