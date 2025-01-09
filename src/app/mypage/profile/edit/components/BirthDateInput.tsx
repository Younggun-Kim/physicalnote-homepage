'use client';

import React from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from './FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';

export const BirthDateInput = ({ enabled = false }: { enabled?: boolean }) => {
  const { birthDate } = useProfileEditStore((store) => store.state);
  const { onChangeBirthDate } = useProfileEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={'생년월일'} />
      <LoginInput
        type="text"
        name="birthDate"
        placeholder="YYYYMMDD"
        enabled={enabled}
        maxLength={8}
        value={birthDate.getValue()}
        onChange={onChangeBirthDate}
        isOnlyNum={true}
      />
    </FieldWrapper>
  );
};
