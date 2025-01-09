'use client';

import { useEffect, useState } from 'react';
import NoSubscribe from '@/app/mypage/subscribe/components/noSubscribe/NoSubscribe';
import Subscribe from '@/app/mypage/subscribe/components/subscribe/Subscribe';
import { useBillingKeyStore } from '@/store';
import useGetSubscriptionStatus from '@/networks/query/payment/useGetSubscriptionStatus';
import useSubscriptionStore from '@/store/subscriptionStore';
import PlanWidget from '@/app/mypage/subscribe/components/plan/PlanWidget';
import PriceBtnGroup from '@/app/mypage/subscribe/components/plan/PriceBtnGroup';
import useGetBillingKeys from '@/networks/query/payment/useGetBillingKeys';

export default function SubscribeContent() {
  const { refetch: billingKeyRefetch } = useGetBillingKeys();
  const { defaultBillingKey } = useBillingKeyStore((store) => store.state);

  const [customerKey, setCustomerKey] = useState('');
  const { data: subscriptionData } = useGetSubscriptionStatus(customerKey);
  const { setSubscription } = useSubscriptionStore((store) => store.actions);
  const { subscription } = useSubscriptionStore((store) => store.state);

  useEffect(() => {
    if (!defaultBillingKey) {
      billingKeyRefetch();
      return;
    }
    setCustomerKey(defaultBillingKey.customerKey);
  }, [defaultBillingKey]);

  useEffect(() => {
    if (subscriptionData == undefined) return;
    setSubscription(subscriptionData);
  }, [subscriptionData, customerKey]);

  const neither = subscription == undefined && defaultBillingKey == undefined;

  return (
    <div className="flex flex-col justify-start items-center">
      {!neither && <PlanWidget />}
      {subscription != undefined && <PriceBtnGroup />}
      {!defaultBillingKey && <NoSubscribe />}
      {defaultBillingKey != undefined && <Subscribe />}
    </div>
  );
}
