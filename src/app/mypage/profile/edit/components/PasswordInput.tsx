'use client';

import React from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import LoginInput from '@/app/login/components/LoginInput';
import FieldTitle from './FieldTitle';

export const PasswordInput = () => {
  const { password } = useProfileEditStore((store) => store.state);
  const { onChangePassword } = useProfileEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={'비밀번호'} />
      <LoginInput
        type="password"
        name="password"
        placeholder="8자 이상 비밀번호를 입력해주세요."
        value={password.getValue()}
        onChange={onChangePassword}
      />
    </FieldWrapper>
  );
};
