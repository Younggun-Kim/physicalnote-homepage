'use client';

import React from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from './FieldTitle';
import { toast } from 'react-toastify';
import PhoneAuthInput from './PhoneAuthInput';
import MessageResponseDto, { isMessageResponse } from '@/app/api/dto/MessageResponseDto';

export const PhoneInfo = () => {
  const { phone } = useProfileEditStore((store) => store.state);
  const { onChangePhone, onChangeIsRequestAuth } = useProfileEditStore((store) => store.actions);

  const handlePhoneRightClick = async () => {
    if (!phone.isValid()) {
      alert('휴대폰번호를 확인해주세요.');
      return;
    }

    try {
      const response = await fetch(`https://dev.physicalnote.com/auth/phone/send?phoneNumber=${phone.getValue()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('서버 에러');
      }
      onChangeIsRequestAuth(true);

      const data = await response.json();

      // Type guard를 사용하여 응답 타입 확인
      if (isMessageResponse(data) && data.status) {
        toast.success(data.message);
      }
    } catch (error) {
      toast(error instanceof Error ? error.message : '서버 에러');
    }
  };
  return (
    <FieldWrapper>
      <FieldTitle text={'연락처'} />
      <PhoneAuthInput
        className="!py-0 h-12"
        value={phone.getValue()}
        onChange={onChangePhone}
        onClickRight={handlePhoneRightClick}
      />
    </FieldWrapper>
  );
};
