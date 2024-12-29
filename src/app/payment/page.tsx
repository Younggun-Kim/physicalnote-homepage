import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getBillingKeysQuery } from '@/networks/query/payment/useGetBillingKeys';
import PaymentContent from '@/app/payment/components/PaymentContent';
import { getSubscriptionPlans } from '@/networks/query/payment/useGetSubscriptionPlans';
import { Suspense } from 'react';
import { getCoachInfo } from '@/networks/query/coach/useGetCoachInfo';
import { getUserInfo } from '@/networks/query/user/useGetUserDetail';

export default async function PaymentPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getBillingKeys'],
    queryFn: getBillingKeysQuery,
  });

  await queryClient.prefetchQuery({
    queryKey: ['getPlans'],
    queryFn: getSubscriptionPlans,
  });

  await queryClient.prefetchQuery({
    queryKey: ['getCoachInfo'],
    queryFn: getCoachInfo,
  });

  await queryClient.prefetchQuery({
    queryKey: ['getUserInfo'],
    queryFn: getUserInfo,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={null}>
        <PaymentContent />
      </Suspense>
    </HydrationBoundary>
  );
}
