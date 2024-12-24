'use client';

import React from 'react';
import Link from 'next/link';

const FindAccount: React.FC = () => {
  return (
    <Link
      href="/"
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
      <span>아이디/비밀번호찾기</span>
    </Link>
  );
};

export default FindAccount;
