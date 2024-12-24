'use client';

import React from 'react';
import { LoginSubmitWrapper } from '@/app/login/components/LoginSubmitWrapper';
import FindAccount from './FindAccount';
import SignUpButton from './SignUpBtn';
import dynamic from 'next/dynamic';

const SubmitBtn = dynamic(() => import('./SubmitBtn'), {
  ssr: false,
});

export default function LoginSubmit() {
  return (
    <LoginSubmitWrapper>
      <FindAccount />
      <div className="my-3">
        <SubmitBtn />
      </div>
      <SignUpButton />
    </LoginSubmitWrapper>
  );
}
