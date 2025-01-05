'use client';

import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import useFindAccountModalStore from '@/store/modal/findAccountModalStore';
import FindAccountFieldWrapper from './FindAccountFieldWrapper';
import SuccessLabel from '@/app/mypage/profile/edit/components/SuccessLabel';
import ErrorLabel from '@/app/mypage/profile/edit/components/ErrorLabel';

export const AuthCodeMsg = () => {
  const { isRequestAuth, phoneMsg, phoneMsgVisible } = useFindAccountModalStore((store) => store.state);

  return isRequestAuth ? (
    <FindAccountFieldWrapper>
      <FieldTitle text={''} />
      {phoneMsgVisible.isNone() && <SuccessLabel text="3분이내에 입력하세요." />}
      {phoneMsgVisible.isVisible() && <SuccessLabel text={phoneMsg} />}
      {phoneMsgVisible.isInvisible() && <ErrorLabel text={phoneMsg} />}
    </FindAccountFieldWrapper>
  ) : null;
};

export default AuthCodeMsg;
