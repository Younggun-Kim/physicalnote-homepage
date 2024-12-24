'use client';

import React from 'react';
import { useAppStore } from '@/store';
import { usePostLogin } from '@/api/query/login';
import { useRouter } from 'next/navigation';
import { LoginSubmitWrapper } from '@/app/login/components/LoginSubmitWrapper';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import FindAccount from './FindAccount';
import SignUpButton from './SignUpBtn';
import SubmitBtn from '@/app/login/components/SubmitBtn';
import useLoginValidation from '@/hooks/useLoginValidation';

export default function LoginSubmit() {
  const router = useRouter();
  const validResult = useLoginValidation();
  const loginMutation = usePostLogin();
  const { onLogin, onLogout } = useAppStore((store) => store.actions);

  const handleSubmit = async () => {
    try {
      const dto = validResult();
      if (!dto) {
        return;
      }
      const result = await loginMutation.mutateAsync(dto);

      if (result.token) {
        onLogin(result.token, result.name);
        router.push('/');
      } else {
        onLogout();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.message) {
          toast(error.response.data.message);
          return;
        }
      }
      toast('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <LoginSubmitWrapper>
      <FindAccount />
      <div className="my-3">
        <SubmitBtn onClick={() => handleSubmit()} />
      </div>
      <SignUpButton />
    </LoginSubmitWrapper>
  );
}
