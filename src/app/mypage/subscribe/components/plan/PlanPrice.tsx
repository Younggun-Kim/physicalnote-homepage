import useSubscriptionStore from '@/store/subscriptionStore';

export default function PlanPrice() {
  const { subscription } = useSubscriptionStore((store) => store.state);

  return (
    <div>
      <span className={'font-sans font-bold text-gray1 text-3xl'}>
        {((subscription?.amount ?? 0) / 10000).toLocaleString()}만원
      </span>
      <span className={'font-sans font-medium text-gray1 text-sm'}>
        {' '}
        / {subscription?.billingCycle === 'MONTHLY' ? '월' : '년'}
      </span>
    </div>
  );
}
