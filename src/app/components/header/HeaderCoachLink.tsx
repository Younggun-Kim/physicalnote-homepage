'use client';

import React from 'react';
import { useAppStore } from '@/store';
import Link from 'next/link';

export default function HeaderCoachLink() {
  const { isLoggedIn } = useAppStore((store) => store.state);
  const { closeMenu } = useAppStore((store) => store.actions);

  const handleClick = () => {
    closeMenu();
  };

  return isLoggedIn ? (
    <Link
      href={'https://coach.physicalnote.com/login'}
      className={'rounded-full py-[0.6rem] px-6 bg-white border-secondary border-[1px]'}
      onClick={handleClick}
    >
      내 피지컬노트
    </Link>
  ) : null;
}
