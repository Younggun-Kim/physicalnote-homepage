import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getBillingKeysQuery } from '@/app/utils/query/payment/useGetBillingKeys';
import PaymentContent from '@/app/payment/components/PaymentContent';
import { getSubscriptionPlans } from '@/app/utils/query/payment/useGetSubscriptionPlans';

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

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PaymentContent />
    </HydrationBoundary>
  );
}
