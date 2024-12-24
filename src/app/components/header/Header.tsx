'use client';

import { useMediaQuery } from 'usehooks-ts';
import HeaderWrapper from '@/app/components/header/HeaderWrapper';
import HeaderLogo from '@/app/components/header/HeaderLogo';
import HeaderMenus from '@/app/components/header/HeaderMenus';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header>
      <div className="bg-white sticky z-40 top-0 w-full"></div>
      <HeaderWrapper>
        <HeaderLogo />
        {!isMobile && <HeaderMenus />}
      </HeaderWrapper>
    </header>
  );
}
