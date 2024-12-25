'use client';

import { useEffect, useState } from 'react';
import { useBillingKeyStore } from '@/store';
import { useSearchParams } from 'next/dist/client/components/navigation';
import { isPlanType, PlanType } from '@/types/planType';
import PaymentTeamInfo from '@/app/payment/components/PaymentTeamInfo';
import PaymentPrice from '@/app/payment/components/PaymentPrice';
import PaymentInfo from '@/app/payment/components/PaymentInfo';
import CardView from '@/app/mypage/subscribe/components/card/CardView';
import PaymentBtnGroup from '@/app/payment/components/PaymentBtnGroup';
import useGetBillingKeys from '@/app/utils/query/payment/useGetBillingKeys';
import PaymentDivider from '@/app/payment/components/PaymentDivider';

export default function PaymentContent() {
  const searchParams = useSearchParams();
  const [planCategory, setPlanCategory] = useState<PlanType>('MONTHLY');

  const { data: billingKeysData } = useGetBillingKeys();
  const { setBillingKey } = useBillingKeyStore((store) => store.actions);
  const [planId, setPlanId] = useState<number | null>(null);

  useEffect(() => {
    if (billingKeysData == undefined) return;
    setBillingKey(billingKeysData);
  }, [billingKeysData]);

  useEffect(() => {
    const type = searchParams.get('type');
    const planId = searchParams.get('planId');
    if (type && isPlanType(type)) {
      setPlanCategory(type);
    }
    setPlanId(parseInt(planId ?? '0'));
  }, [searchParams]);

  return (
    <div className={'w-full max-w-[800px] flex flex-col justify-start items-start py-10 px-7.5 mx-auto sm:mt-12'}>
      <span className={'font-sans font-bold text-black text-base sm:text-xl'}>플랜정보</span>
      <PaymentTeamInfo />
      <PaymentPrice type={planCategory} />
      <PaymentDivider />
      <span className={'font-sans font-bold text-black text-base sm:text-xl'}>정보</span>
      <PaymentInfo />
      <PaymentDivider />
      <div className="w-full flex justify-center">
        <CardView alignCenter={true} />
      </div>
      <PaymentBtnGroup
        billingCycle={planCategory}
        planId={planId ?? undefined}
      />
    </div>
  );
}
