'use client';

import { useProfileEditStore } from '@/store';
import React from 'react';
import FieldWrapper from './FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';

export const PasswordMsg = () => {
  const { isPasswordErrorVisible } = useProfileEditStore((store) => store.state);

  return isPasswordErrorVisible.isVisible() ? (
    <FieldWrapper>
      <FieldTitle text={''} />
      <span className={'font-sans font-normal text-[10px] tracking-tighter text-red'}>
        비밀번호가 일치하지 않습니다.
      </span>
    </FieldWrapper>
  ) : null;
};

export default PasswordMsg;
