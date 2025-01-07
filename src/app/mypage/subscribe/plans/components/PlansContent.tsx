'use client';

import PlanItem from '@/app/mypage/subscribe/plans/components/PlanItem';
import { useEffect } from 'react';
import usePlanStore from '@/store/plansStore';
import { useRouter } from 'next/navigation';
import useGetSubscriptionPlans from '@/networks/query/payment/useGetSubscriptionPlans';
import { useAppStore } from '@/store';

export default function PlansContent() {
  const router = useRouter();
  const { isLoggedIn } = useAppStore((store) => store.state);
  const { data: planData } = useGetSubscriptionPlans();
  const { setPlans } = usePlanStore((store) => store.actions);
  const { plans } = usePlanStore((store) => store.state);

  useEffect(() => {
    if (planData == undefined) return;
    setPlans(planData);
  }, [planData]);

  return (
    <div
      className={[
        'w-full flex flex-wrap flex-col justify-start items-center gap-5',
        'lg:flex-row lg:gap-0 lg:justify-between',
        'lg:max-w-[920px]',
      ].join(' ')}
    >
      {plans.map((plan) => (
        <PlanItem
          key={plan.name}
          category={plan.name}
          amount={plan.monthlyDiscountedPrice}
          description={plan.features}
          onClick={() => {
            if (!isLoggedIn) {
              router.push('/login');
              return;
            }
            router.push(`/payment?planId=${plan?.id ?? 0}`);
          }}
        />
      ))}
    </div>
  );
}
