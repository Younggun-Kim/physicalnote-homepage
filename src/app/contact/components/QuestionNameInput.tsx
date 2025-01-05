import React from 'react';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export const QuestionNameInput = ({ value, onChange }: Props) => {
  return (
    <FieldWrapper>
      <FieldTitle text={'이름'} />
      <LoginInput
        type="text"
        name="name"
        placeholder=""
        value={value}
        className=""
        enabled={true}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
