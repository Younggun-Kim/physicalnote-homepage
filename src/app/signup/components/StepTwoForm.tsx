import React from 'react';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import Button from '@/app/components/Button';
import { StepProps } from '@/app/signup/components/StepOneForm';
import SidoSelect from '@/app/mypage/team/components/SidoSelect';
import SiGunGuSelect from '@/app/mypage/team/components/SiGunGuSelect';
import Affiliation from '@/app/mypage/team/components/Affiliation';
import TeamAgeSelect from '@/app/mypage/team/components/TeamAgeSelect';
import TeamSizeSelect from '@/app/mypage/team/components/TeamSizeSelect';
import StaffPositionSelect from '@/app/mypage/team/components/StaffPositionSelect';
import TeamEditSubmit from '@/app/mypage/team/components/TeamEditSubmit';

export const StepTwoForm = ({ onClickNext }: StepProps) => {
  const handleNext = () => {
    onClickNext(2);
  };

  const handlePrev = () => {
    onClickNext(0);
  };

  return (
    <div className="w-full flex-1 flex flex-col items-end  pt-8 gap-6 sm:max-w-[500px]">
      <SidoSelect />
      <SiGunGuSelect />
      <Affiliation />
      <TeamAgeSelect />
      <TeamSizeSelect />
      <StaffPositionSelect />
      <TeamEditSubmit />
      <div className="mb-6 w-full flex gap-x-5">
        <Button
          text="이전"
          containerClassName={'w-[78px] h-[48px] xs:w-[110px] sm:w-[143px]'}
          className="bg-gray3 w-full h-full !text-sm xs:!text-base sm:!text-lg"
          onClick={handlePrev}
        />
        <EnabledBtn
          text="회원가입"
          containerClassName="py-3 flex-1"
          className={'w-full h-full !text-sm xs:!text-base sm:!text-lg'}
          isEnabled={true}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default StepTwoForm;
