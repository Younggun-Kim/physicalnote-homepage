import ChangePwInput from '@/app/components/modal/findAccount/ChangePwInput';
import ChangePwVerifyInput from '@/app/components/modal/findAccount/ChangePwVerifyInput';
import FindPwStep2Btn from '@/app/components/modal/findAccount/FindPwStep2Btn';
import useFindAccountModalStore, { isValidPw } from '@/store/modal/findAccountModalStore';

const FindAccountChangePw = () => {
  const { state } = useFindAccountModalStore();
  return (
    <div className="w-full flex flex-col justify-start items-start px-7.5">
      <ChangePwInput />
      <ChangePwVerifyInput />
      <span className={'font-sans font-normal text-sm text-red tracking-tighter leading-relaxed'}>
        {isValidPw(state) ? '' : '비밀번호가 일치하지않습니다.'}
      </span>
      <FindPwStep2Btn />
    </div>
  );
};

export default FindAccountChangePw;
