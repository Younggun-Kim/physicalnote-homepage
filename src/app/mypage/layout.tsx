'use client';

import React from 'react';
import Menus from './components/Menus';
import MyPageMobileMenu from '@/app/mypage/components/MyPageMobileMenu';
import UserInfo from './components/userInfo/UserInfo';
import { useMediaQuery } from 'usehooks-ts';
import LogoutBtn from '@/app/mypage/components/LogoutBtn';
import WithoutBtn from '@/app/mypage/components/WithoutBtn';

interface Props {
  children: React.ReactNode;
}

export default function MyPageLayout({ children }: Props) {
  const isMobile = useMediaQuery('(max-width: 425px)');

  return (
    <div
      className={[
        'flex flex-col p-7',
        'sm:flex-row sm:py-10 sm:px-24 sm:gap-10 ',
        'md:p-25 md:gap-25 md:justify-center',
      ].join(' ')}
    >
      <div className="">
        <div className="flex justify-start items-center mb-7">
          <span className={['font-sans font-bold text-gray1', 'text-xl sm:text-2xl md:text-[2rem]'].join(' ')}>
            마이페이지
          </span>
          <MyPageMobileMenu />
        </div>
        <UserInfo />
        {!isMobile && (
          <div className="mt-10">
            <Menus />
            <div className="mt-12 flex justify-start items-center gap-2.5">
              <LogoutBtn />
              <WithoutBtn />
            </div>
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
