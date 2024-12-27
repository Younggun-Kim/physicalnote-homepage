'use client';

import { useProfileEditStore } from '@/store';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import CheckBox from '@/app/components/checkbox/CheckBox';

export const CheckTerm = () => {
  const router = useRouter();
  const { term } = useProfileEditStore((state) => state.state);
  const { onToggleTerm } = useProfileEditStore((state) => state.actions);

  const handleCheck = () => onToggleTerm();

  const handleClick = () => {
    router.push('/policy/privacy');
  };

  return (
    <div className="flex justify-start items-center mb-3">
      <CheckBox
        isChecked={term}
        onClick={handleCheck}
      />
      <div
        className="ml-2.5 flex gap-x-1  hover:cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-sans font-normal text-3 text-gray2">개인정보이용동의</span>
        <Image
          src="/icons/chevron-right.svg"
          alt={''}
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};
export default CheckTerm;
