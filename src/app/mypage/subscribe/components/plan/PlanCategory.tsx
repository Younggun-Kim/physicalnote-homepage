'use client';

import useSubscriptionStore from '@/store/subscriptionStore';

export default function PlanCategory() {
  const { subscription } = useSubscriptionStore((store) => store.state);

  const formatBillingCycle = (cycle?: string) => {
    return cycle ? cycle.charAt(0).toUpperCase() + cycle.slice(1).toLowerCase() : '';
  };
  return (
    <div className="flex flex-col justify-start items-start">
      <span className={'font-poetsen font-bold leading-relaxed text-primary text-base xs:text-lg'}>
        {formatBillingCycle(subscription?.billingCycle)}
      </span>
      <span className={'font-sans font-normal text-primary leading-relaxed tracking-tighter text-xs'}>
        (인원:30명+10명)
      </span>
    </div>
  );
}
