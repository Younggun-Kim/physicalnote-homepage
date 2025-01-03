'use client';

import { useEffect, useState } from 'react';
import NoSubscribe from '@/app/mypage/subscribe/components/noSubscribe/NoSubscribe';
import useGetBillingKeys from '@/networks/query/payment/useGetBillingKeys';
import Subscribe from '@/app/mypage/subscribe/components/subscribe/Subscribe';
import { useBillingKeyStore } from '@/store';
import useGetSubscriptionStatus from '@/networks/query/payment/useGetSubscriptionStatus';
import useSubscriptionStore from '@/store/subscriptionStore';
import PlanWidget from '@/app/mypage/subscribe/components/plan/PlanWidget';
import PriceBtnGroup from '@/app/mypage/subscribe/components/plan/PriceBtnGroup';

export default function SubscribeContent() {
  const { data: billingKeysData = [] } = useGetBillingKeys();
  const { setBillingKey } = useBillingKeyStore((store) => store.actions);
  const { billingKey } = useBillingKeyStore((store) => store.state);

  const [customerKey, setCustomerKey] = useState('');
  const { data: subscriptionData } = useGetSubscriptionStatus(customerKey);
  const { setSubscription } = useSubscriptionStore((store) => store.actions);
  const { subscription } = useSubscriptionStore((store) => store.state);

  useEffect(() => {
    if (billingKeysData == undefined) return;

    if (JSON.stringify(billingKeysData) !== JSON.stringify(billingKey)) {
      setBillingKey(billingKeysData);
      setCustomerKey(() => billingKeysData[0].customerKey);
    }
  }, [billingKeysData]);

  useEffect(() => {
    if (subscriptionData == undefined) return;
    setSubscription(subscriptionData);
  }, [subscriptionData, customerKey]);

  const neither = subscription == undefined && billingKey == undefined;

  return (
    <div className="flex flex-col justify-start items-center">
      {!neither && <PlanWidget />}
      {subscription != undefined && <PriceBtnGroup />}
      {billingKey.length == 0 && <NoSubscribe />}
      {billingKey.length != 0 && <Subscribe />}
    </div>
  );
}
