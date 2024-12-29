'use client';

import Link from 'next/link';
import { useAppStore } from '@/store';

export function HomeThirdBtn() {
  const { isLoggedIn } = useAppStore((store) => store.state);
  return (
    <Link href={isLoggedIn ? '/mypage' : '/login'}>
      <span
        className={[
          'rounded-full hover:cursor-pointer',
          'font-sans text-white font-bold text-[1.625rem] bg-primary py-5 px-9',
          'sm:text-[1.875rem]',
          'md:text-[2.1875rem]',
          'lg:text-[3rem] lg:py-7 lg:px-12',
        ].join(' ')}
      >
        시작하기
      </span>
    </Link>
  );
}

export default HomeThirdBtn;
