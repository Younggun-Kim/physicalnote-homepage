'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/dist/client/components/navigation';
import PaymentTeamInfo from '@/app/payment/components/PaymentTeamInfo';
import PaymentPrice from '@/app/payment/components/PaymentPrice';
import PaymentInfo from '@/app/payment/components/PaymentInfo';
import CardView from '@/app/mypage/subscribe/components/card/CardView';
import PaymentBtnGroup from '@/app/payment/components/PaymentBtnGroup';
import PaymentDivider from '@/app/payment/components/PaymentDivider';
import usePlanStore from '@/store/plansStore';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';

export default function PaymentContent() {
  const searchParams = useSearchParams();

  const { plans } = usePlanStore((store) => store.state);

  const [plan, setPlan] = useState<PlanResponseDto | undefined>();

  useEffect(() => {
    const planId = searchParams.get('planId');
    const findPlan = plans.find((plan) => plan.id == parseInt(planId ?? ''));
    setPlan(findPlan);
  }, [searchParams]);

  return (
    <div className={'w-full max-w-[800px] flex flex-col justify-start items-start py-10 px-7.5 mx-auto sm:mt-12'}>
      <span className={'font-sans font-bold text-black text-base sm:text-xl'}>플랜정보</span>
      <PaymentTeamInfo />
      <PaymentPrice plan={plan} />
      <PaymentDivider />
      <span className={'font-sans font-bold text-black text-base sm:text-xl'}>정보</span>
      <PaymentInfo />
      <PaymentDivider />
      <div className="w-full flex justify-center">
        <CardView alignCenter={true} />
      </div>
      <PaymentBtnGroup plan={plan} />
    </div>
  );
}
