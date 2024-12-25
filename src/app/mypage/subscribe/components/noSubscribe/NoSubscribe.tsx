'use client';

import NoSubscribeImg from './NoSubscribeImg';
import NoSubscribeLink from './NoSubscribeLink';

export default function NoSubscribe() {
  return (
    <div className={'flex flex-col justify-start items-center mt-[40px] sm:mt-[155px] md:mt-[186px]'}>
      <NoSubscribeImg />
      <span
        className={[
          'font-sans font-bold text-gray1 tracking-tighter',
          'mb-10 xs:mb-[70px] sm:mb-[100px] ',
          'text-sm xs:text-base',
        ].join(' ')}
      >
        구독 내역이 없습니다.
      </span>
      <span
        className={[
          'font-sans font-normal text-center text-gray1 tracking-tighter mb-5',
          'text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] ',
        ].join(' ')}
      >
        구독 내용이 궁금하신가요?
      </span>
      <NoSubscribeLink />
    </div>
  );
}
