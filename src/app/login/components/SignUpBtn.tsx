'use client';

import { useRouter } from 'next/navigation';
import { LoginBtn } from '@/app/login/components/LoginBtn';

/** 로그인 하기 버튼 */
export function SignUpButton() {
  const router = useRouter();

  return (
    <LoginBtn
      text={'회원가입'}
      className={'bg-white'}
      containerClassName={'shadow-md'}
      onClick={() => router.push('/signup')}
    />
  );
}

export default SignUpButton;
