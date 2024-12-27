'use client';

import React from 'react';
import CheckTerm from './CheckTerm';
import { SignUpNextBtn } from '@/app/signup/components/SignUpNextBtn';

export interface StepProps {
  onClickNext: (currentStep: number) => void;
}

export const StepOneForm = ({ onClickNext }: StepProps) => {
  const handleNext = () => {
    // if (!isValid()) {
    //   alert('입력 항목을 모두 올바르게 입력해주세요.');
    //   return;
    // }
    onClickNext(1);
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center">
      <div className="flex-1"></div>
      <div className="w-full mb-6">
        <CheckTerm />
        <div className="flex justify-end items-center gap-5">
          <SignUpNextBtn
            text="다음"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default StepOneForm;
