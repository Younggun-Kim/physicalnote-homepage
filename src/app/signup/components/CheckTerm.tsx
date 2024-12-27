'use client';

import { useSignupStore } from '@/store';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import CheckBox from '@/app/components/checkbox/CheckBox';

export const CheckTerm = () => {
  const router = useRouter();
  const { isTermChecked } = useSignupStore((state) => state.state);
  const { changeIsTermChecked } = useSignupStore((state) => state.actions);

  const handleCheck = () => changeIsTermChecked(!isTermChecked);

  const handleClick = () => {
    router.push('/policy/privacy');
  };
  return (
    <div className="flex justify-start items-center mb-3">
      <CheckBox
        isChecked={isTermChecked}
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
