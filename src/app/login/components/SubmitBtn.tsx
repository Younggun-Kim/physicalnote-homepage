import useLoginValidation from '@/hooks/useLoginValidation';
import { useAppStore } from '@/store';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import LoginBtn from '@/app/login/components/LoginBtn';
import React from 'react';
import { ApiError, LoginResponse } from '@/app/api/login/route';

/** 로그인 하기 버튼 */
export function SubmitBtn() {
  const router = useRouter();
  const validResult = useLoginValidation();
  const { onLogin, onLogout } = useAppStore((store) => store.actions);

  const handleSubmit = async (): Promise<void> => {
    try {
      const dto = validResult();
      if (!dto) {
        return;
      }

      const loginData = {
        loginId: dto.loginId,
        password: dto.password,
        type: 'IDPW',
      };

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = (await response.json()) as LoginResponse | ApiError;

      if (!response.ok) {
        throw new Error('error' in data ? data.error : '로그인 중 오류가 발생했습니다.');
      }

      if ('token' in data && 'name' in data) {
        onLogin(data.token, data.name);
        router.push('/');
      } else {
        onLogout();
      }
    } catch (error) {
      toast(error instanceof Error ? error.message : '로그인 중 오류가 발생했습니다.');
    } finally {
    }
  };

  return (
    <LoginBtn
      containerClassName={'bg-secondary'}
      onClick={handleSubmit}
      text={'로그인'}
    />
  );
}

export default SubmitBtn;
