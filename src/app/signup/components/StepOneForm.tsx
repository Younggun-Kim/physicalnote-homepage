import React from 'react';
import CheckTerm from './CheckTerm';
import { SignUpNextBtn } from '@/app/signup/components/SignUpNextBtn';
import { NameInput } from '@/app/mypage/profile/edit/components/NameInput';
import { BirthDateInput } from '@/app/mypage/profile/edit/components/BirthDateInput';
import { GenderSelect } from '@/app/mypage/profile/edit/components/GenderSelect';
import { EmailInput } from '@/app/mypage/profile/edit/components/EmailInput';
import { PhoneInfo } from '@/app/mypage/profile/edit/components/PhoneInfo';
import { PhoneAuthCode } from '@/app/mypage/profile/edit/components/PhoneAuthCode';
import AuthCodeMsg from '@/app/mypage/profile/edit/components/AuthCodeMsg';
import { PasswordInput } from '@/app/mypage/profile/edit/components/PasswordInput';
import { PasswordVerifyInput } from '@/app/mypage/profile/edit/components/PasswordVerifyInput';
import PasswordMsg from '@/app/mypage/profile/edit/components/PasswordMsg';
import { useProfileEditStore } from '@/store';
import { toast } from 'react-toastify';

export interface StepProps {
  onClickNext: (currentStep: number) => void;
}

export const StepOneForm = ({ onClickNext }: StepProps) => {
  const { isValidSignUp } = useProfileEditStore((store) => store.actions);
  const handleNext = () => {
    if (!isValidSignUp(useProfileEditStore.getState().state)) {
      toast('입력 항목을 모두 올바르게 입력해주세요.');
      return;
    }
    onClickNext(1);
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center pt-8 gap-6 sm:max-w-[500px]">
      <NameInput enabled={true} />
      <BirthDateInput enabled={true} />
      <GenderSelect enabled={true} />
      <EmailInput enabled={true} />
      <div className="w-full flex-col justify-start items-start">
        <PhoneInfo />
        <PhoneAuthCode />
        <AuthCodeMsg />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-1.5">
        <PasswordInput />
        <PasswordVerifyInput />
        <PasswordMsg />
      </div>
      <div className="flex-1"></div>
      <div className="w-full mb-6 flex flex-col justify-start items-center">
        <div className="w-full max-w-[320px]">
          <CheckTerm />
        </div>
        <SignUpNextBtn
          text="다음"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default StepOneForm;
