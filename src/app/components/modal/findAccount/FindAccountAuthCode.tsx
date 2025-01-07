'use client';

import FindAccountFieldWrapper from '@/app/components/modal/findAccount/FindAccountFieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import useFindAccountModalStore from '@/store/modal/findAccountModalStore';
import LoginInput from '@/app/login/components/LoginInput';

export const FindAccountAuthCode = () => {
  const { isRequestAuth, authCode, isPhoneAuth } = useFindAccountModalStore((store) => store.state);
  const { onInputAuthCode } = useFindAccountModalStore((store) => store.actions);

  return isRequestAuth ? (
    <FindAccountFieldWrapper>
      <FieldTitle text={''} />

      <LoginInput
        className="!py-0 h-12"
        type="text"
        name="auth"
        enabled={!isPhoneAuth}
        placeholder="인증번호를 입력해주세요"
        value={authCode.getValue()}
        isOnlyNum={true}
        maxLength={6}
        onChange={onInputAuthCode}
      ></LoginInput>
    </FindAccountFieldWrapper>
  ) : null;
};
