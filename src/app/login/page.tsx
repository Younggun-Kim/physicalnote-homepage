'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import useLoginStore from '@/store/loginStore';
import LoginInput from '@/app/login/components/LoginInput';
import LoginSubmitWrapper from '@/app/login/components/LoginSubmitWrapper';
import FindAccount from '@/app/login/components/FindAccount';
import SignUpButton from '@/app/login/components/SignUpBtn';
import SubmitBtn from '@/app/login/components/SubmitBtn';

export default function LoginPage() {
  const { resetState } = useLoginStore((state) => state.actions);
  const { loginId, password } = useLoginStore((state) => state.state);
  const { onLoginIdInput, onPasswordInput } = useLoginStore((state) => state.actions);

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
        <h1 className="mt-16 mb-12 font-sans text-xl font-bold text-gray-900 md:mt-44 md:mb-10 md:text-4xl">로그인</h1>
        <div className="w-full flex flex-col justify-start items-center mb-11 gap-5 md:mb-16">
          <LoginInput
            type={'email'}
            name={'email'}
            placeholder={'이메일을 입력하세요'}
            value={loginId.getValue()}
            onChange={onLoginIdInput}
          />
          <LoginInput
            type={'password'}
            name={'password'}
            placeholder={'비밀번호를 입력하세요'}
            value={password.getValue()}
            onChange={onPasswordInput}
          />
        </div>
        <LoginSubmitWrapper>
          <FindAccount />
          <div className="my-3">
            <SubmitBtn />
          </div>
          <SignUpButton />
        </LoginSubmitWrapper>
      </div>
    </div>
  );
}
