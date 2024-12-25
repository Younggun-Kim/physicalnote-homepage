'use client';

import { useProfileEditStore } from '@/store';
import React from 'react';
import FieldWrapper from './FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import SuccessLabel from './SuccessLabel';
import ErrorLabel from './ErrorLabel';

export const AuthCodeMsg = () => {
  const { isRequestAuth, isPhoneVisible, authMsg } = useProfileEditStore((store) => store.state);

  return isRequestAuth ? (
    <FieldWrapper>
      <FieldTitle text={''} />
      {isPhoneVisible.isNone() && <SuccessLabel text="3분이내에 입력하세요." />}
      {isPhoneVisible.isVisible() && <SuccessLabel text={authMsg} />}
      {isPhoneVisible.isInvisible() && <ErrorLabel text={authMsg} />}
    </FieldWrapper>
  ) : null;
};

export default AuthCodeMsg;
