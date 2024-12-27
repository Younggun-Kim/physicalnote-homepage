'use client';

import React from 'react';
import { useTeamEditStore } from '@/store';
import { entrySourceDropDownOptions } from '@/types';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import Dropdown from '@/app/components/dropdown/Dropdown';

export default function EntrySourceSelect() {
  const { entrySource } = useTeamEditStore((store) => store.state);
  const { onChangeEntrySource } = useTeamEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={'앱 유입'} />
      <Dropdown
        className="w-full"
        placeholder="선택"
        options={entrySourceDropDownOptions}
        selectedOption={entrySource}
        onSelect={onChangeEntrySource}
      />
    </FieldWrapper>
  );
}
