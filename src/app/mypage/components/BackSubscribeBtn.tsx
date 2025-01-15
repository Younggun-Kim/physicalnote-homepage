'use client';

import { useRouter } from 'next/navigation';

export const BackSubscribeBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="rounded-full text-gray1 font-sans text-sm md:text-base lg:text-xl font-bold bg-secondary flex justify-center items-center px-[26px] py-[9px] cursor-pointer hover:cursor-pointer"
    >
      뒤로가기
    </button>
  );
};

export default BackSubscribeBtn;
