'use client';

import NoSubscribe from '@/app/mypage/subscribe/components/noSubscribe/NoSubscribe';
import useGetBillingKeys from '@/app/utils/query/payment/useGetBillingKeys';

export default function SubscribeContent() {
  const { data: billingKey = [], isLoading } = useGetBillingKeys();

  const isEmptyKey = billingKey.length === 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-start items-start">
      {/*<PlanWidget />*/}
      {/*<PriceBtnGroup />*/}
      {isEmptyKey && <NoSubscribe />}
      <NoSubscribe />
      {/*{(billingKey?.length ?? 0) > 0 && <Subscribe />}*/}
    </div>
  );
}
