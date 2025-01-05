'use cilent';

import useFindAccountModalStore, { isValidPw } from '@/store/modal/findAccountModalStore';
import { useFindPwStep2 } from '@/networks/query/login/findPw/useFindPwStep2';

const FindPwStep2Btn = () => {
  const state = useFindAccountModalStore((store) => store.state);
  const { setPwChangedResult } = useFindAccountModalStore((store) => store.actions);
  const bgColor = isValidPw(state) ? 'bg-secondary' : 'bg-gray3';
  const step2Mutation = useFindPwStep2();

  const handleClick = async () => {
    if (!isValidPw(state)) {
      return;
    }
    const response = await step2Mutation.mutateAsync({
      password: state.password.getValue(),
      userLoginId: state.foundPwId,
    });

    setPwChangedResult(response.status);
  };
  return (
    <button
      className={[
        'rounded-full w-full max-w-[320px] flex items-center justify-center',
        'shadow-md h-12',
        'font-sans font-bold text-gray1 text-base mt-12',
        bgColor,
      ].join(' ')}
      onClick={handleClick}
    >
      비밀번호 변경
    </button>
  );
};

export default FindPwStep2Btn;
