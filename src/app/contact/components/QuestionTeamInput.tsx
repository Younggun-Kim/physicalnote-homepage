import React from 'react';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import LoginInput from '@/app/login/components/LoginInput';

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export const QuestionTeamInput = ({ value, onChange }: Props) => {
  return (
    <FieldWrapper>
      <FieldTitle text={'소속'} />
      <LoginInput
        type="text"
        name="team"
        placeholder=""
        value={value}
        className=""
        enabled={true}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
