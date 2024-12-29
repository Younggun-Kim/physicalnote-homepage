'use client';

import usePlanStore from '@/store/plansStore';
import { PlanType } from '@/types/planType';
import { useEffect, useState } from 'react';
import PaymentField from '@/app/payment/components/PaymentField';
import useGetSubscriptionPlans from '@/app/networks/query/payment/useGetSubscriptionPlans';

interface Props {
  type: PlanType;
}

export default function PaymentPrice({ type }: Props) {
  const [price, setPrice] = useState(0);
  const { data: planData } = useGetSubscriptionPlans();
  const { setPlan } = usePlanStore((store) => store.actions);
  const { plan } = usePlanStore((store) => store.state);

  useEffect(() => {
    if (planData == undefined) return;
    setPlan(planData);
  }, [planData]);

  useEffect(() => {
    if (type === 'MONTHLY') {
      setPrice(plan?.monthlyDiscountedPrice ?? 0);
    } else {
      setPrice(plan?.yearlyDiscountedPrice ?? 0);
    }
  }, [type, plan]);

  return (
    <div className={'flex justify-start items-center gap-[58px]'}>
      <PaymentField>결제금액</PaymentField>
      <div>
        <span
          className={'font-sans font-normal text-gray1 text-2xl leading-relaxed tracking-tighter sm:text-[2.25rem]'}
        >
          {price / 10000}만원
        </span>
        <span className={'font-sans font-medium text-gray1 text-base'}> / {type === 'MONTHLY' ? '월' : '년'}</span>
      </div>
    </div>
  );
}
