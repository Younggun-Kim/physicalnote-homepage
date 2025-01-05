'use cilent';

import useFindAccountModalStore, { isValidFindId } from '@/store/modal/findAccountModalStore';
import { useFindId } from '@/networks/query/login/findId/useFindId';
import { toast } from 'react-toastify';

const FindIdBtn = () => {
  const state = useFindAccountModalStore((store) => store.state);
  const { onSaveFoundId } = useFindAccountModalStore((store) => store.actions);
  const bgColor = isValidFindId(state) ? 'bg-secondary' : 'bg-gray3';
  const findIdMutation = useFindId();

  const handleClick = async () => {
    if (!isValidFindId(state)) {
      return;
    }
    try {
      const response = await findIdMutation.mutateAsync({
        phoneNumber: state.phone.getValue(),
        authCode: state.authCode.getValue(),
      });

      if (response.userLoginId) {
        onSaveFoundId(response.userLoginId);
      }
    } catch (error) {}
  };

  const handleClickTest = () => {
    onSaveFoundId('test@test.com');
  };

  return (
    <button
      className={[
        'rounded-full w-full max-w-[320px] flex items-center justify-center',
        'shadow-md h-12',
        'font-sans font-bold text-gray1 text-base',
        bgColor,
      ].join(' ')}
      // onClick={handleClick}
      onClick={handleClickTest}
    >
      아이디찾기
    </button>
  );
};

export default FindIdBtn;
