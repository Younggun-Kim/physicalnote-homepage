'use client';

import FindAccountFieldWrapper from '@/app/components/modal/findAccount/FindAccountFieldWrapper';
import AuthNumberInput from '@/app/mypage/profile/edit/components/AuthNumberInput';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import useFindAccountModalStore from '@/store/modal/findAccountModalStore';
import { useAuthCodeVerify } from '@/networks/query/common/useAuthCodeVerify';
import VisibleValue from '@/data/visible_type';
import LoginInput from '@/app/login/components/LoginInput';
import Button from '@/app/components/Button';

export const FindAccountAuthCode = () => {
  const { isRequestAuth, phone, authCode, isPhoneAuth } = useFindAccountModalStore((store) => store.state);
  const { setAuthCodeVerify, onInputAuthCode, onChangePhoneMsg, onChangePhoneMsgVisible } = useFindAccountModalStore(
    (store) => store.actions,
  );

  const authCodeVerifyMutation = useAuthCodeVerify();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAuthNumRightClick = async () => {
    if (isPhoneAuth) {
      return;
    }
    if (!authCode.isValid()) {
      alert('인증번호를 입력해주세요.');
      return;
    }

    try {
      const response = await authCodeVerifyMutation.mutateAsync({
        phoneNumber: phone.getValue(),
        authCode: authCode.getValue(),
      });

      setAuthCodeVerify(response.valid);
      onChangePhoneMsg(response.valid ? '인증되었습니다.' : response.message);
      onChangePhoneMsgVisible(response.valid ? VisibleValue.visible() : VisibleValue.invisible());
    } catch (error) {
      onChangePhoneMsgVisible(VisibleValue.invisible());
      onChangePhoneMsg('서버에러');
    }
  };

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
