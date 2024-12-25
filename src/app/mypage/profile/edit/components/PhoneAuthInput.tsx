import LoginInput from '@/app/login/components/LoginInput';
import Button from '@/app/components/Button';

interface Props {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onClickRight: () => void;
}

export const PhoneAuthInput = ({ className, value, onChange, onClickRight }: Props) => {
  return (
    <LoginInput
      className={className}
      type="tel"
      name="phone"
      placeholder="'-' 는 제외"
      value={value}
      maxLength={11}
      isOnlyNum={true}
      onChange={onChange}
    >
      <Button
        containerClassName={'translate-x-[10px]'}
        className={'!text-3 font-bold leading-[1.6] tracking-tighter !text-gray2 !py-[5px] !px-5 bg-tertiary'}
        text={'인증'}
        onClick={onClickRight}
      />
    </LoginInput>
  );
};
export default PhoneAuthInput;
