'use client';

import { useMediaQuery } from 'usehooks-ts';
import HeaderWrapper from '@/app/components/header/HeaderWrapper';
import HeaderLogo from '@/app/components/header/HeaderLogo';
import HeaderMenus from '@/app/components/header/HeaderMenus';
import HeaderLoginLink from '@/app/components/header/HeaderLoginLink';
import HeaderMyPageLink from './HeaderMyPageLink';
import HeaderMenuBtn from '@/app/components/header/HeaderMenuBtn';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header>
      <div className="bg-white sticky z-40 top-0 w-full"></div>
      <HeaderWrapper>
        <HeaderLogo />
        {!isMobile && <HeaderMenus />}
        <div className="flex gap-6">
          <HeaderLoginLink />
          <HeaderMyPageLink />
          {/*TODO: 문의하기 버튼 추가*/}
          {isMobile && <HeaderMenuBtn />}
        </div>
      </HeaderWrapper>
    </header>
  );
}