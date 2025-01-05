'use cilent';

import useFindAccountModalStore, { isValidFindId } from '@/store/modal/findAccountModalStore';
import { useFindPwStep1 } from '@/networks/query/login/findPw/useFindPwStep1';
import { toast } from 'react-toastify';

const FindPwStep1Btn = () => {
  const state = useFindAccountModalStore((store) => store.state);
  const { onSaveFoundPwId } = useFindAccountModalStore((store) => store.actions);
  const bgColor = isValidFindId(state) ? 'bg-secondary' : 'bg-gray3';
  const findPwStep1Mutation = useFindPwStep1();

  const handleClick = async () => {
    if (!isValidFindId(state)) {
      return;
    }
    try {
      const response = await findPwStep1Mutation.mutateAsync({
        phoneNumber: state.phone.getValue(),
        authCode: state.authCode.getValue(),
      });

      if (response.userLoginId) {
        onSaveFoundPwId(response.userLoginId);
      } else {
        toast.error(response.message);
      }
    } catch (error) {}
  };

  return (
    <button
      className={[
        'rounded-full w-full max-w-[320px] flex items-center justify-center',
        'shadow-md h-12',
        'font-sans font-bold text-gray1 text-base',
        bgColor,
      ].join(' ')}
      onClick={handleClick}
      // onClick={handleClickTest}
    >
      비밀번호 변경
    </button>
  );
};

export default FindPwStep1Btn;
