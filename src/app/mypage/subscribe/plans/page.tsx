import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PlansContent from '@/app/mypage/subscribe/plans/components/PlansContent';
import { getSubscriptionPlans } from '@/networks/query/payment/useGetSubscriptionPlans';

export default async function PlansPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getPlans'],
    queryFn: getSubscriptionPlans,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PlansContent />
    </HydrationBoundary>
  );
}
