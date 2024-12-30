import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PricingPageContent from '@/app/pricing/components/PricingPageContent';
import { getSubscriptionPlans } from '@/networks/query/payment/useGetSubscriptionPlans';

export default async function PricingPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getPlans'],
    queryFn: getSubscriptionPlans,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PricingPageContent />
    </HydrationBoundary>
  );
}
