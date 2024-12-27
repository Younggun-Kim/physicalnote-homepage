'use client';

import React from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import SelectableBtn from '@/app/components/SelectableBtn';
import { GenderValue } from '@/data';

export const GenderSelect = ({ enabled = false }: { enabled?: boolean }) => {
  const { gender } = useProfileEditStore((store) => store.state);
  const { onChangeGender } = useProfileEditStore((store) => store.actions);

  const handleChange = (gender: GenderValue) => {
    if (!enabled) return;

    onChangeGender(gender);
  };
  return (
    <FieldWrapper>
      <FieldTitle text={'성별'} />
      <div className={'w-full max-w-[300px] h-10 flex gap-1.5 sm:max-w-[400px] sm:gap-4 md:h-12'}>
        <SelectableBtn
          text="남성"
          containerClassName="flex-1 shadow-md"
          className="flex-1 w-full h-12 py-0 leaing-[1.6] !font-normal text-xs  sm:text-sm md:text-base"
          isSelected={gender.isMale}
          onClick={() => handleChange(GenderValue.male())}
        />
        <SelectableBtn
          text="여성"
          containerClassName="flex-1 shadow-md"
          className="flex-1 w-full h-12 py-0 leaing-[1.6] !font-normal text-xs sm:text-sm md:text-base"
          isSelected={gender.isFemale}
          onClick={() => handleChange(GenderValue.female())}
        />
      </div>
    </FieldWrapper>
  );
};
