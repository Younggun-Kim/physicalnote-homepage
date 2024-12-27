'use client';

import { useEffect, useState } from 'react';
import { useSignupStore } from '@/store';
import { clamp } from '@/utils';
import SignUpSteps from '@/app/signup/components/SignUpSteps';
import StepOneForm from '@/app/signup/components/StepOneForm';
import StepTwoForm from '@/app/signup/components/StepTwoForm';
import StepThreeForm from '@/app/signup/components/StepThreeForm';

export default function Signup() {
  const maxStep = 3;
  const [step, setStep] = useState(1);
  const { signUpStoreInit } = useSignupStore((store) => store.actions);

  useEffect(() => {
    signUpStoreInit();
  }, []);

  const handleStepChange = (currentStep: number) => {
    setStep(clamp(currentStep + 1, 1, maxStep));
  };

  return (
    <div className="relative h-full flex flex-col items-center gap-8  px-7.5 py-9">
      <div>
        <h1 className="font-sans font-bold text-gray1 text-xl sm:text-2xl md:text-[2rem]">회원가입</h1>
      </div>
      <div className="w-full h-full flex flex-col items-center">
        <SignUpSteps
          currentStep={step}
          maxStep={maxStep}
        />
        {step === 1 && <StepOneForm onClickNext={handleStepChange} />}
        {step === 2 && <StepTwoForm onClickNext={handleStepChange} />}
        {step === 3 && <StepThreeForm />}
      </div>
    </div>
  );
}
