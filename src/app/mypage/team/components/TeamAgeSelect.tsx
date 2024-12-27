'use client';
import React from 'react';
import { ageDropDownOptions } from '@/types';
import { canTeamValidCheck, toTeamValidRequestDto, useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import Dropdown from '@/app/components/dropdown/Dropdown';
import useTeamValidate from '@/app/utils/query/login/useTeamValidate';
import { toast } from 'react-toastify';

export default function TeamAgeSelect() {
  const teamEditState = useTeamEditStore((store) => store.state);
  const { teamAge, teamValidateErrorVisible, teamValidateErrorMsg, isTeamValidate } = teamEditState;
  const { onChangeTeamAge, onChangeIsTeamValidate, onChangeTeamValidateMsg } = useTeamEditStore(
    (store) => store.actions,
  );
  const teamValidateMutation = useTeamValidate();

  const handleClick = async () => {
    if (!canTeamValidCheck(teamEditState)) {
      toast('입력값을 확인해주세요.');
      return;
    }

    try {
      const result = await teamValidateMutation.mutateAsync(toTeamValidRequestDto(teamEditState));

      onChangeIsTeamValidate(result.valid);
      onChangeTeamValidateMsg(result.valid ? '' : result.message);
    } catch (e) {
      onChangeIsTeamValidate(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2.5">
      <FieldWrapper>
        <FieldTitle text={'연령대'} />
        <Dropdown
          className="w-full"
          placeholder="선택"
          options={ageDropDownOptions}
          selectedOption={teamAge}
          onSelect={onChangeTeamAge}
          hasRightBtn={true}
          onRightClick={() => handleClick()}
          rightBtnText={'중복확인'}
        />
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
