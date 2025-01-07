'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAppStore } from '@/store';

interface Props {
  hasIcon: boolean;
}

export default function HeaderContactLink({ hasIcon = true }: Props) {
  const { closeMenu } = useAppStore((store) => store.actions);

  return (
    <Link
      href={'/contact'}
      className={[
        'w-[132px] flex justify-center items-center rounded-full py-[0.6rem] px-6 bg-secondary',
        'font-sans font-bold text-gray1 text-sm',
      ].join(' ')}
      onClick={closeMenu}
    >
      문의하기
      {hasIcon && (
        <Image
          className={'sm:w-6 sm:h-6 md:hidden'}
          src={'/icons/arrow-right.svg'}
          alt=""
          width={20}
          height={20}
        />
      )}
    </Link>
  );
}
