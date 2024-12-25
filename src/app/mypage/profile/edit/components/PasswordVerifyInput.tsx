'use client';
import React from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';

export const PasswordVerifyInput = () => {
  const { passwordVerify } = useProfileEditStore((store) => store.state);
  const { onChangePasswordVerify } = useProfileEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={''} />
      <LoginInput
        type="password"
        name="passwordVerify"
        placeholder="비밀번호 확인"
        value={passwordVerify.getValue()}
        onChange={onChangePasswordVerify}
      />
    </FieldWrapper>
  );
};
