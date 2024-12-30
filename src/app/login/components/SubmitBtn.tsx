import useLoginValidation from '@/app/hooks/useLoginValidation';
import { useAppStore } from '@/store';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import LoginBtn from '@/app/login/components/LoginBtn';
import React from 'react';
import usePostLogin from '@/networks/query/login/usePostLogin';
import { AxiosError } from 'axios';

/** 로그인 하기 버튼 */
export function SubmitBtn() {
  const router = useRouter();
  const validResult = useLoginValidation();
  const { onLogin, onLogout } = useAppStore((store) => store.actions);
  const loginMutation = usePostLogin();

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
    <LoginBtn
      containerClassName={'bg-secondary'}
      onClick={handleSubmit}
      text={'로그인'}
    />
  );
}

export default SubmitBtn;
