import React from 'react';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export const QuestionPhoneInput = ({ value, onChange }: Props) => {
  return (
    <FieldWrapper>
      <FieldTitle text={'연락처'} />
      <LoginInput
        type="tel"
        name="phone"
        placeholder=""
        value={value}
        className=""
        maxLength={11}
        enabled={true}
        isOnlyNum={true}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
