import Button from '@/app/components/Button';
import LoginInput from '@/app/login/components/LoginInput';

interface Props {
  className?: string;
  value: string;
  enabled: boolean;
  onChange: (value: string) => void;
  onClickRight: () => void;
}

export const AuthNumberInput = ({ className, value, enabled, onChange, onClickRight }: Props) => {
  return (
    <LoginInput
      className={className}
      type="text"
      name="auth"
      enabled={enabled}
      placeholder="인증번호를 입력해주세요"
      value={value}
      isOnlyNum={true}
      maxLength={6}
      onChange={onChange}
    >
      <Button
        containerClassName={'translate-x-[10px]'}
        className={'!text-3 font-bold leading-[1.6] tracking-tighter !text-gray2 !py-[5px] !px-5 bg-tertiary'}
        text={'확인'}
        onClick={onClickRight}
      />
    </LoginInput>
  );
};
export default AuthNumberInput;
