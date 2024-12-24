'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import useLoginStore from '@/store/loginStore';
import LoginTitle from './components/LoginTitle';
import LoginSubmit from './components/LoginSubmit';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  const { resetState } = useLoginStore((state) => state.actions);

  useEffect(() => {
    resetState();
  }, [resetState]);

  return (
    <div className="flex justify-center items-start w-[100vw]">
      <div className="fixed w-full min-h-[734px] top-0 bottom-[20%] z-0">
        <Image
          src="/images/loginBackground.svg"
          alt=""
          fill
        />
      </div>
      <div className="relative w-full flex flex-col items-center z-10">
        <LoginTitle>로그인</LoginTitle>
        <LoginForm />
        <LoginSubmit />
      </div>
    </div>
  );
}
