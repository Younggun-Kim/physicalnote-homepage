'use client';

import PriceContent from '@/app/pricing/components/PriceContent';
import PriceContentRefund from '@/app/pricing/components/PriceContentRefund';
import useGetSubscriptionPlans from '@/networks/query/payment/useGetSubscriptionPlans';
import { useEffect } from 'react';
import usePlanStore from '@/store/plansStore';

export default function PricingPageContent() {
  const plansData = useGetSubscriptionPlans();
  const actions = usePlanStore((store) => store.actions);

  useEffect(() => {
    if (!plansData.data) return;
    actions.setPlans(plansData.data);
  }, [plansData]);

  return (
    <div
      className={[
        'flex flex-col justify-start items-center',
        'pt-[60px] px-[30px] pb-[32px]',
        'xs:pt-[47px] xs:px-[60px] xs:pb-[20px]',
        'sm:pt-[80px] sm:px-[75px] sm:pb-[20px]',
      ].join(' ')}
    >
      <PriceContent />
      <div className="h-[1px] w-full max-w-[1587px] bg-secondary"></div>
      <PriceContentRefund />
    </div>
  );
}
