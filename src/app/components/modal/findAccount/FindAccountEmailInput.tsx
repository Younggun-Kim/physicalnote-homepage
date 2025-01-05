'use client';
import React from 'react';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';
import FindAccountFieldWrapper from './FindAccountFieldWrapper';
import useFindAccountModalStore from '@/store/modal/findAccountModalStore';

const FindAccountEmailInput = () => {
  const { email } = useFindAccountModalStore((store) => store.state);
  const { onInputEmail } = useFindAccountModalStore((store) => store.actions);

  return (
    <FindAccountFieldWrapper>
      <FieldTitle text={'이메일'} />
      <LoginInput
        type="email"
        name="name"
        placeholder="이메일을 입력해주세요."
        value={email.getValue()}
        className=""
        enabled={true}
        onChange={onInputEmail}
      />
    </FindAccountFieldWrapper>
  );
};
export default FindAccountEmailInput;
