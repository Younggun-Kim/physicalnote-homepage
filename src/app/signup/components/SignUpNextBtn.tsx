import { EnabledBtn } from '@/app/components/EnabledBtn';
import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
}
export const SignUpNextBtn = ({ text, onClick }: Props) => {
  return (
    <EnabledBtn
      text={text}
      containerClassName="h-10 xs:x-12 w-full xs:w-[320px]"
      className={'w-full h-full text-sm xs:text-lg'}
      onClick={onClick}
      isEnabled={true}
    />
  );
};
