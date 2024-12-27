'use client';

import React from 'react';
import { teamSizeDropDownOptions } from '@/types';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import Dropdown from '@/app/components/dropdown/Dropdown';

export default function TeamSizeSelect() {
  const { teamSize } = useTeamEditStore((store) => store.state);
  const { onChangeTeamSize } = useTeamEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={'회원수'} />
      <Dropdown
        className="w-full"
        placeholder="선택"
        options={teamSizeDropDownOptions}
        selectedOption={teamSize}
        onSelect={onChangeTeamSize}
      />
    </FieldWrapper>
  );
}
