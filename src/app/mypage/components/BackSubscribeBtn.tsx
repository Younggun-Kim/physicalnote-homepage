'use client';
import Link from 'next/link';

export const BackSubscribeBtn = () => {
  return (
    <Link
      href={'/mypage/subscribe'}
      className="rounded-full text-gray1 font-sans text-sm md:text-base lg:text-xl font-bold bg-secondary flex justify-center items-center px-[26px] py-[9px] cursor-pointer hover:cursor-pointer"
    >
      뒤로가기
    </Link>
  );
};

export default BackSubscribeBtn;
