'use client';

import PaymentField from '@/app/payment/components/PaymentField';
import { useAppStore } from '@/store';
import useCoachInfoStore from '@/store/coachInfoStore';

export default function PaymentInfo() {
  const { userInfo } = useAppStore((store) => store.state);
  const { coachInfo } = useCoachInfoStore((store) => store.state);

  return (
    <div className="flex flex-col justify-start items-start mt-5 gap-5">
      <div>
        <PaymentField className="inline-block min-w-20">이름</PaymentField>
        <span className={'font-sans font-normal text-black text-base leading-relaxed tracking-tighter'}>
          {userInfo?.name ?? ''}
        </span>
      </div>
      <div>
        <PaymentField className="inline-block min-w-20">구단</PaymentField>
        <span className={'font-sans font-normal text-black text-base leading-relaxed tracking-tighter'}>
          {`${coachInfo?.teamName ?? ''}/${coachInfo?.teamAgeGroup}`}
        </span>
      </div>
      <div>
        <PaymentField className="inline-block min-w-20">이메일</PaymentField>
        <span className={'font-sans font-normal text-black text-base leading-relaxed tracking-tighter'}>
          {userInfo?.loginId ?? ''}
        </span>
      </div>
      <div>
        <PaymentField className="inline-block min-w-20">연락처</PaymentField>
        <span className={'font-sans font-normal text-black text-base leading-relaxed tracking-tighter'}>
          {userInfo?.cellPhone ?? ''}
        </span>
      </div>
    </div>
  );
}
