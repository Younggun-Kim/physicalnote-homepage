'use client';

import PlanItem from '@/app/mypage/subscribe/plans/components/PlanItem';
import { useEffect } from 'react';
import usePlanStore from '@/store/plansStore';
import { useRouter } from 'next/navigation';
import useGetSubscriptionPlans from '@/app/utils/query/payment/useGetSubscriptionPlans';

export default function PlansContent() {
  const { data: planData } = useGetSubscriptionPlans();
  const { setPlan } = usePlanStore((store) => store.actions);
  const { plan } = usePlanStore((store) => store.state);
  const router = useRouter();

  useEffect(() => {
    if (planData == undefined) return;
    setPlan(planData);
  }, [planData]);

  return (
    <div className="flex flex-col justify-start items-start gap-9 mt-15 md:flex-row md:gap-10 md:mt-0">
      <PlanItem
        category="Monthly"
        amount={plan?.monthlyDiscountedPrice ?? 0}
        description="30명 초과 시 10명당 1만원 부과"
        onClick={() => {
          router.push(`/payment?type=MONTHLY&planId=${planData?.id ?? 0}`);
        }}
      ></PlanItem>
      <PlanItem
        category="Yearly"
        amount={plan?.yearlyDiscountedPrice ?? 0}
        description="1년 단위 계약시 10% 할인됩니다."
        onClick={() => {
          router.push(`/payment?type=YEARLY&planId=${planData?.id ?? 0}`);
        }}
      ></PlanItem>
    </div>
  );
}
