'use client';

import React from 'react';
import Menus from './components/Menus';
import MyPageContainer from './components/MyPageContainer';
import { MyPageTitle } from '@/app/mypage/components/MyPageTitle';
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
    <MyPageContainer>
      <div className="">
        <div className="flex justify-start items-center mb-7">
          <MyPageTitle>마이페이지</MyPageTitle>
          <MyPageMobileMenu />
        </div>
        <UserInfo />
        {!isMobile && (
          <div className="mt-10">
            <Menus />
            <div className="mt-12">
              <LogoutBtn />
              <WithoutBtn />
            </div>
          </div>
        )}
      </div>
      <div>{children}</div>
    </MyPageContainer>
  );
}
