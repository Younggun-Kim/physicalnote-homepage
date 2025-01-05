'use client';
import React from 'react';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';
import FindAccountFieldWrapper from './FindAccountFieldWrapper';
import useFindAccountModalStore from '@/store/modal/findAccountModalStore';

const FindAccountNameInput = () => {
  const { name } = useFindAccountModalStore((store) => store.state);
  const { onInputName } = useFindAccountModalStore((store) => store.actions);

  return (
    <FindAccountFieldWrapper>
      <FieldTitle text={'이름'} />
      <LoginInput
        type="text"
        name="name"
        placeholder="이름을 입력해주세요."
        value={name}
        className=""
        enabled={true}
        onChange={onInputName}
      />
    </FindAccountFieldWrapper>
  );
};
export default FindAccountNameInput;
