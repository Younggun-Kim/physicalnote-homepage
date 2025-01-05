'use client';

import React from 'react';
import useFindAccountModalStore from '@/store/modal/findAccountModalStore';

const FindAccount: React.FC = () => {
  const { openModal } = useFindAccountModalStore((store) => store.actions);
  return (
    <button
      onClick={openModal}
      className="
        inline-block
        w-full
        text-right
        font-['Noto_Sans_KR']
        text-[10px]
        font-medium
        text-gray-900
        underline
        underline-offset-auto
        decoration-solid
        ml-auto
        sm:text-xs
        md:text-xs
        lg:text-sm
      "
    >
      아이디/비밀번호찾기
    </button>
  );
};

export default FindAccount;
