'use client';

import React from 'react';
import { useTeamEditStore } from '@/store';
import { staffPositionDropDownOptions } from '@/types';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import Dropdown from '@/app/components/dropdown/Dropdown';

export default function StaffPositionSelect() {
  const { staffPosition } = useTeamEditStore((store) => store.state);
  const { onChangeStaffPosition } = useTeamEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={'직책'} />
      <Dropdown
        className="w-full"
        placeholder="선택"
        options={staffPositionDropDownOptions}
        selectedOption={staffPosition}
        onSelect={onChangeStaffPosition}
      />
    </FieldWrapper>
  );
}
