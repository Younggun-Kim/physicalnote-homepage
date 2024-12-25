import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import SubscribeContent from '@/app/mypage/subscribe/components/SubscribeContent';
import { getBillingKeysQuery } from '@/app/utils/query/payment/useGetBillingKeys';

export default async function MyPageSubscribe() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getBillingKeys'],
    queryFn: getBillingKeysQuery,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SubscribeContent />
    </HydrationBoundary>
  );
}
