import React from 'react';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export const QuestionEmailInput = ({ value, onChange }: Props) => {
  return (
    <FieldWrapper>
      <FieldTitle text={'이메일'} />
      <LoginInput
        type="email"
        name="email"
        placeholder=""
        value={value}
        className=""
        enabled={true}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
