'use client';

import React from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';

export const NameInput = ({ enabled = false }: { enabled?: boolean }) => {
  const { name } = useProfileEditStore((store) => store.state);
  const { onChangeName } = useProfileEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={'이름'} />
      <LoginInput
        type="text"
        name="name"
        placeholder="이름을 입력해주세요."
        value={name}
        className=""
        enabled={enabled}
        onChange={onChangeName}
      />
    </FieldWrapper>
  );
};
