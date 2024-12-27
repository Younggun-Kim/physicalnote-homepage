import React from 'react';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import Button from '@/app/components/Button';
import { StepProps } from '@/app/signup/components/StepOneForm';

export const StepTwoForm = ({ onClickNext }: StepProps) => {
  const handleNext = () => {
    onClickNext(2);
  };

  const handlePrev = () => {
    onClickNext(0);
  };

  return (
    <div className="flex-1 flex flex-col items-end">
      <div className="flex-1 min-h-10"></div>
      <div className="mb-6 flex gap-x-6">
        <Button
          text="이전"
          className="bg-gray3 py-3 px-13.5"
          onClick={handlePrev}
        />
        <EnabledBtn
          text="회원가입"
          containerClassName="py-3 w-80"
          className={'w-full h-full'}
          isEnabled={true}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default StepTwoForm;
