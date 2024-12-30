import LoginBtn from '@/app/login/components/LoginBtn';
import Link from 'next/link';

/** 회원가입 하기 버튼 */
export function SignUpButton() {
  return (
    <Link href="/signup">
      <LoginBtn
        text={'회원가입'}
        className={'bg-white'}
        containerClassName={'shadow-md'}
      />
    </Link>
  );
}

export default SignUpButton;
