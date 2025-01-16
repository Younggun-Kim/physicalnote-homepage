'use client';

import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import uuid from 'react-uuid';
import { toast } from 'react-toastify';
import Image from 'next/image';
import useCoachInfoStore from '@/store/coachInfoStore';
import { useSearchParams } from 'next/navigation';

export default function CardAddBtn() {
  const searchParams = useSearchParams();
  const { coachInfo } = useCoachInfoStore((store) => store.state); //useCoachInfo

  const handleClick = async () => {
    const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;

    if (!clientKey) {
      toast('토스 클라이언트키가 없습니다.');
      return;
    }
    const params = `?planId=${searchParams.get('planId') ?? 0}`;
    // ------ 클라이언트 키로 객체 초기화 ------
    loadTossPayments(clientKey).then((tossPayments) => {
      // ------ 카드 등록창 호출 ------
      tossPayments
        .payment({ customerKey: uuid() })
        .requestBillingAuth({
          method: 'CARD',
          successUrl: `${window.location.origin}/mypage/subscribe/card/success${params}`,
          failUrl: `${window.location.origin}/mypage/subscribe/card/failure${params}`,
          customerName: coachInfo?.name,
          customerEmail: coachInfo?.loginId,
          windowTarget: 'iframe',
        })
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            // 결제 고객이 결제창을 닫았을 때 에러 처리
          }
        });
    });
  };
  return (
    <button
      className={[
        'rounded-full flex items-center bg-white py-[5px] px-3 gap-2.5',
        'font-sans font-bold text-gray1 whitespace-nowrap',
        'text-sm sm:text-base',
      ].join(' ')}
      onClick={handleClick}
    >
      카드 등록
      <Image
        className={'sm:w-6 sm:h-6'}
        src={'/icons/arrow-right.svg'}
        alt=""
        width={20}
        height={20}
      />
    </button>
  );
}
