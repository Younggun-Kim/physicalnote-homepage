'use client';

import { useEffect, useState } from 'react';
import NoSubscribe from '@/app/mypage/subscribe/components/noSubscribe/NoSubscribe';
import useGetBillingKeys from '@/app/utils/query/payment/useGetBillingKeys';
import Subscribe from '@/app/mypage/subscribe/components/subscribe/Subscribe';
import { useBillingKeyStore } from '@/store';

export default function SubscribeContent() {
  const { data: billingKeysData = [], isLoading } = useGetBillingKeys();
  const { setBillingKey } = useBillingKeyStore((store) => store.actions);
  const { billingKey } = useBillingKeyStore((store) => store.state);

  const [customerKey, setCustomerKey] = useState('');

  useEffect(() => {
    if (billingKeysData == undefined) return;

    if (JSON.stringify(billingKeysData) !== JSON.stringify(billingKey)) {
      setBillingKey(billingKeysData);
      setCustomerKey(() => billingKeysData[0].customerKey);
    }
  }, [billingKeysData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-start items-center">
      {/*<PlanWidget />*/}
      {/*<PriceBtnGroup />*/}
      {billingKey.length == 0 && <NoSubscribe />}
      {billingKey.length != 0 && <Subscribe />}
    </div>
  );
}
