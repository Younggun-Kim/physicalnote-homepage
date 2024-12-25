'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Dropdown, { DropDownOption } from '@/app/components/dropdown/Dropdown';

export default function MyPageMobileMenu() {
  const options = [
    {
      label: '내정보 수정',
      value: 'profile',
    },
    {
      label: '소속 관리',
      value: 'team',
    },
    {
      label: '구독설정',
      value: 'subscribe',
    },
  ] as DropDownOption<string>[];

  const [selectedOption, setSelectedOption] = React.useState<DropDownOption<string>>(options[0]);
  const router = useRouter();
  const handleSelect = (selected: DropDownOption<string>) => {
    setSelectedOption(selected);
    router.push(selected.value);
  };

  return (
    <Dropdown
      className={`shadow-none text-[0.875rem] text-gray1 font-sans font-normal sm:hidden`}
      placeholder="메뉴를 선택해주세요."
      options={options}
      selectedOption={selectedOption}
      onSelect={handleSelect}
    />
  );
}
