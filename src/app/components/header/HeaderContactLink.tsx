'use client';

import Link from 'next/link';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import Image from 'next/image';

export default function HeaderContactLink() {
  const isMobile = useMediaQuery(768);

  return (
    <Link
      href={'/contact'}
      className={[
        'w-[132px] flex justify-center items-center rounded-full py-[0.6rem] px-6 bg-secondary',
        'font-sans font-bold text-gray1 text-sm',
        isMobile ? 'mb-3' : '',
      ].join(' ')}
    >
      문의하기
      {isMobile && (
        <Image
          className={'sm:w-6 sm:h-6'}
          src={'/icons/arrow-right.svg'}
          alt=""
          width={20}
          height={20}
        />
      )}
    </Link>
  );
}
