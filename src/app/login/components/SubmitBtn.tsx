import useLoginValidation from '@/app/hooks/useLoginValidation';
import { useAppStore } from '@/store';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import LoginBtn from '@/app/login/components/LoginBtn';
import React from 'react';
import usePostLogin from '@/networks/query/login/usePostLogin';
import { AxiosError } from 'axios';
import useRefetchQuery from '@/app/hooks/useRefetchQuery';

/** 로그인 하기 버튼 */
export function SubmitBtn() {
  const router = useRouter();
  const validResult = useLoginValidation();
  const { onLogin, onLogout } = useAppStore((store) => store.actions);
  const loginMutation = usePostLogin();
  const { refetchAll } = useRefetchQuery();

  const handleSubmit = async () => {
    try {
      // 1. Validation check
      const loginDto = validResult();
      if (!loginDto) {
        return;
      }

      // 2. Login API call
      const loginResponse = await loginMutation.mutateAsync(loginDto);

      // 3. Check login success
      if (!loginResponse.token) {
        onLogout();
        return;
      }

      // 4. Process successful login
      await processSuccessfulLogin(loginResponse.token);

      // 5. Redirect to home
      router.push('/');
    } catch (error) {
      handleLoginError(error);
    }
  };

  const processSuccessfulLogin = async (token: string) => {
    // Update login state and token
    await onLogin(token);

    // Fetch user information
    await refetchAll();
  };

  const handleLoginError = (error: unknown) => {
    if (error instanceof AxiosError && error.response?.data?.message) {
      toast(error.response.data.message);
      return;
    }
    toast('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
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
