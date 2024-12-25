'use client';
import BackSubscribeBtn from '@/app/mypage/components/BackSubscribeBtn';

export default function CardFailurePage() {
  return (
    <div className={['w-full flex flex-col justify-start items-center', 'mt-10 sm:mt-12'].join(' ')}>
      <span
        className={[
          'font-sans font-bold text-gray1 text-sm mb-5 tracking-tighter',
          'sm:text-base md:text-lg',
          ' ',
        ].join(' ')}
      >
        카드 등록에 실패하였습니다.
      </span>
      <BackSubscribeBtn />
    </div>
  );
}
