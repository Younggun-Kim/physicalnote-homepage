'use client';

import useFindAccountModalStore from '@/store/modal/findAccountModalStore';

const FindPwResult = () => {
  const { closeModal } = useFindAccountModalStore((store) => store.actions);

  return (
    <div className={'flex flex-col justify-start items-start pt-12 px-7.5'}>
      <p
        className={
          'flex flex-col justify-start items-start gap-2.5 mb-12 font-sans font-bold text-gray1 text-2xl tracking-tighter'
        }
      >
        <span>비밀번호가</span>
        <span>변경되었습니다.</span>
      </p>

      <button
        className={[
          'rounded-full w-full max-w-[320px] flex items-center justify-center',
          'h-12 bg-secondary shadow-md overflow-hidden',
          'font-sans font-bold text-gray1 text-base',
        ].join(' ')}
        onClick={closeModal}
      >
        로그인
      </button>
    </div>
  );
};

export default FindPwResult;
