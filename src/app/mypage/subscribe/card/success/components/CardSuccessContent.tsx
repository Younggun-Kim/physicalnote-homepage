'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import usePostBillingKey from '@/app/networks/query/payment/usePostBillingKey';
import BackSubscribeBtn from '@/app/mypage/components/BackSubscribeBtn';

export default function CardSuccessContent() {
  const searchParams = useSearchParams();
  const postBillingKey = usePostBillingKey();

  useEffect(() => {
    (async () => {
      const customerKey = searchParams.get('customerKey');
      const authKey = searchParams.get('authKey');

      if (customerKey && authKey) {
        try {
          await postBillingKey.mutateAsync({
            customerKey,
            authKey,
          });
        } catch (error) {}
      }
    })();
  }, [searchParams]);

  return (
    <div className={['w-full flex flex-col justify-start items-center', 'mt-10 sm:mt-12'].join(' ')}>
      <span
        className={[
          'font-sans font-bold text-gray1 text-sm mb-5 tracking-tighter',
          'sm:text-base md:text-lg',
          ' ',
        ].join(' ')}
      >
        카드 등록이 완료되었습니다.
      </span>
      <BackSubscribeBtn />
    </div>
  );
}
