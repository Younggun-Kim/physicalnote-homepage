'use client';

import { useEffect, useState } from 'react';
import NoSubscribe from '@/app/mypage/subscribe/components/noSubscribe/NoSubscribe';
import useGetBillingKeys from '@/app/utils/query/payment/useGetBillingKeys';
import Subscribe from '@/app/mypage/subscribe/components/subscribe/Subscribe';
import { useBillingKeyStore } from '@/store';
import useGetSubscriptionStatus from '@/app/utils/query/payment/useGetSubscriptionStatus';
import useSubscriptionStore from '@/store/subscriptionStore';
import PlanWidget from '@/app/mypage/subscribe/components/plan/PlanWidget';
import PriceBtnGroup from '@/app/mypage/subscribe/components/plan/PriceBtnGroup';

export default function SubscribeContent() {
  const { data: billingKeysData = [], isLoading } = useGetBillingKeys();
  const { setBillingKey } = useBillingKeyStore((store) => store.actions);
  const { billingKey } = useBillingKeyStore((store) => store.state);

  const [customerKey, setCustomerKey] = useState('');
  const { data: subscriptionData } = useGetSubscriptionStatus(customerKey);
  const { setSubscription } = useSubscriptionStore((store) => store.actions);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  /// 구독 여부
  /// 카드 등록 여부

  return (
    <div className="flex flex-col justify-start items-center">
      {billingKey.length != 0 && <PlanWidget />}
      {billingKey.length != 0 && <PriceBtnGroup />}
      {billingKey.length == 0 && <NoSubscribe />}
      {billingKey.length != 0 && <Subscribe />}
    </div>
  );
}
