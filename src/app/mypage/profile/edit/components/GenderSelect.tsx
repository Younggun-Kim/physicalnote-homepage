'use client';

import React from 'react';
import useProfileEditStore from '@/store/profileEditStore';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import SelectableBtn from '@/app/components/SelectableBtn';

export const GenderSelect = () => {
  const { gender } = useProfileEditStore((store) => store.state);

  return (
    <FieldWrapper>
      <FieldTitle text={'성별'} />
      <div className={'w-full max-w-[300px] h-10 flex gap-1.5 sm:max-w-[400px] sm:gap-4 md:h-12'}>
        <SelectableBtn
          text="남성"
          containerClassName="flex-1 shadow-md"
          className="flex-1 w-full h-12 py-0 leaing-[1.6] !font-normal text-xs  sm:text-sm md:text-md"
          isSelected={gender.isMale}
          onClick={() => {}}
        />
        <SelectableBtn
          text="여성"
          containerClassName="flex-1 shadow-md"
          className="flex-1 w-full h-12 py-0 leaing-[1.6] !font-normal text-xs sm:text-sm md:text-md"
          onClick={() => {}}
          isSelected={gender.isFemale}
        />
      </div>
    </FieldWrapper>
  );
};
