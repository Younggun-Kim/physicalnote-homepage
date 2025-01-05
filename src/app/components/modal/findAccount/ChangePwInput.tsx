import useFindAccountModalStore from '@/store/modal/findAccountModalStore';
import FindAccountFieldWrapper from '@/app/components/modal/findAccount/FindAccountFieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';
import React from 'react';

const ChangePwInput = () => {
  const { password } = useFindAccountModalStore((store) => store.state);
  const { onInputPw } = useFindAccountModalStore((store) => store.actions);

  return (
    <FindAccountFieldWrapper>
      <FieldTitle text={'비밀번호'} />
      <LoginInput
        type="password"
        name="password"
        placeholder="영문+특수문자+숫자를 포함한 8자 이상"
        value={password.getValue()}
        className=""
        enabled={true}
        onChange={onInputPw}
      />
    </FindAccountFieldWrapper>
  );
};

export default ChangePwInput;
