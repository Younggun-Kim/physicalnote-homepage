import { LoginBtn } from '@/app/login/components/LoginBtn';
import { ButtonProps } from '@/app/components/Button';

/** 로그인 하기 버튼 */
export function SubmitBtn({ onClick }: Pick<ButtonProps, 'onClick'>) {
  return (
    <LoginBtn
      text={'로그인'}
      containerClassName={'shadow-md'}
      className={'bg-secondary'}
      onClick={onClick}
    />
  );
}

export default SubmitBtn;
