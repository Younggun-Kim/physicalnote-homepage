'use client';
import React, { useState } from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from './FieldTitle';
import VisibleValue from '@/data/visible_type';
import styled from 'styled-components';
import AuthNumberInput from './AuthNumberInput';
import { PhoneVerifyResponseDto } from '@/networks/dto/common';

export const PhoneAuthCode = () => {
  const { phone, authNum, isPhoneAuth, isRequestAuth } = useProfileEditStore((store) => store.state);
  const { onChangeAuthNum, onChangeAuthMsg, onChangeIsPhoneAuth, onChangeIsPhoneVisible } = useProfileEditStore(
    (store) => store.actions,
  );
  const [authCodeEnabled, setAuthCodeEnabled] = useState<boolean>(true);

  const handleAuthNumRightClick = async () => {
    if (!authNum.isValid()) {
      alert('인증번호를 입력해주세요.');
      return;
    }
    if (isPhoneAuth) {
      return;
    }

    let url = 'https://dev.physicalnote.com/auth/phone/verify';
    url += `?authCode=${authNum.getValue()}&phoneNumber=${phone.getValue()}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('서버 에러');
      }

      const data = await response.json();
      if (data as PhoneVerifyResponseDto) {
        onChangeAuthMsg(data.message);
        onChangeIsPhoneAuth(data.valid);
        setAuthCodeEnabled(!data.valid);
        onChangeIsPhoneVisible(data.valid ? VisibleValue.visible() : VisibleValue.invisible());
      }
    } catch (e) {
      onChangeIsPhoneVisible(VisibleValue.invisible());
      onChangeAuthMsg('서버에러');
    }
  };
  return isRequestAuth ? (
    <StyledDiv>
      <FieldTitle text={''} />
      <AuthNumberInput
        className="!py-0 h-12"
        enabled={authCodeEnabled}
        value={authNum.getValue()}
        onChange={onChangeAuthNum}
        onClickRight={handleAuthNumRightClick}
      />
    </StyledDiv>
  ) : null;
};

const StyledDiv = styled(FieldWrapper)`
  margin: 10px 0;
`;
