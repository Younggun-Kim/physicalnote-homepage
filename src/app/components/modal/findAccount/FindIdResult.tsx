'use client';

import useFindAccountModalStore from '@/store/modal/findAccountModalStore';

const FindIdResult = () => {
  const { name, foundId } = useFindAccountModalStore((store) => store.state);
  const { onChangeTab, closeModal } = useFindAccountModalStore((store) => store.actions);

  return (
    <div className={'flex flex-col justify-start items-start pt-15 px-7.5'}>
      <span
        className={'font-sans font-bold text-gray1 text-sm tracking-tighter'}
      >{`${name ?? '회원'}님의 아이디는`}</span>
      <p className={'flex flex-col justify-start items-start gap-2.5 mb-12'}>
        <span className={'font-sans font-bold text-primary text-2xl tracking-tighter'}>{foundId}</span>
        <span className={'font-sans font-bold text-gray1 text-sm tracking-tighter'}>입니다.</span>
      </p>

      <div className={'w-full flex justify-center mb-5'}>
        <button
          className={'font-sans font-normal text-gray1 text-sm leading-relaxed tracking-tighter'}
          onClick={() => onChangeTab('pw')}
        >
          비밀번호 찾기
        </button>
      </div>

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

export default FindIdResult;
