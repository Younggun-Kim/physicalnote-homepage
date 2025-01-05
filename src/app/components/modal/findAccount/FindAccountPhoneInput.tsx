'use client';

import React from 'react';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import FindAccountFieldWrapper from './FindAccountFieldWrapper';
import useFindAccountModalStore from '@/store/modal/findAccountModalStore';
import PhoneAuthInput from '@/app/mypage/profile/edit/components/PhoneAuthInput';
import { usePhoneSend } from '@/networks/query/common/usePhoneSend';
import { toast } from 'react-toastify';

const FindAccountPhoneInput = () => {
  const { phone } = useFindAccountModalStore((store) => store.state);
  const { onInputPhone, setRequestAuth } = useFindAccountModalStore((store) => store.actions);
  const phoneSendMutation = usePhoneSend();

  const handlePhoneRightClick = async () => {
    if (!phone.isValid()) {
      alert('휴대폰번호를 확인해주세요.');
      return;
    }

    try {
      const response = await phoneSendMutation.mutateAsync({
        phoneNumber: phone.getValue(),
      });

      setRequestAuth(response.status);
      response.status && toast.success(response.message);
    } catch (error) {}
  };

  return (
    <FindAccountFieldWrapper>
      <FieldTitle text={'연락처'} />
      <PhoneAuthInput
        className="!py-0 h-12"
        value={phone.getValue()}
        onChange={onInputPhone}
        onClickRight={handlePhoneRightClick}
      />
    </FindAccountFieldWrapper>
  );
};
export default FindAccountPhoneInput;
