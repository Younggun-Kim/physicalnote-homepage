import React from 'react';
import Link from 'next/link';
import { useAppStore } from '@/store';

/** 로그인 버튼 */
export const HeaderLoginLink = () => {
  const { isLoggedIn } = useAppStore((store) => store.state);
  const { closeMenu } = useAppStore((store) => store.actions);
  const handleClick = () => {
    closeMenu();
  };

  return isLoggedIn ? null : (
    <Link
      className="font-sans font-bold text-sm text-gray1"
      onClick={handleClick}
      href={'/login'}
    >
      로그인
    </Link>
  );
};

export default HeaderLoginLink;
