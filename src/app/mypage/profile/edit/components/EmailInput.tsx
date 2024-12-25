'use client';

import React from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';

export const EmailInput = () => {
  const { email } = useProfileEditStore((store) => store.state);
  return (
    <FieldWrapper>
      <FieldTitle text={'이메일'} />
      <LoginInput
        type="text"
        name="email"
        enabled={false}
        placeholder="이메일을 입력해주세요."
        value={email.getValue()}
        className="w-100 !py-2.75 self-center"
        onChange={() => {}}
      />
    </FieldWrapper>
  );
};
