import useFindAccountModalStore from '@/store/modal/findAccountModalStore';
import FindAccountFieldWrapper from '@/app/components/modal/findAccount/FindAccountFieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';
import React from 'react';

const ChangePwVerifyInput = () => {
  const { passwordVerify } = useFindAccountModalStore((store) => store.state);
  const { onInputPwVerify } = useFindAccountModalStore((store) => store.actions);

  return (
    <FindAccountFieldWrapper>
      <FieldTitle text={''} />
      <LoginInput
        type="password"
        name="passwordVerify"
        placeholder="비밀번호 확인"
        value={passwordVerify.getValue()}
        className=""
        enabled={true}
        onChange={onInputPwVerify}
      />
    </FindAccountFieldWrapper>
  );
};

export default ChangePwVerifyInput;
