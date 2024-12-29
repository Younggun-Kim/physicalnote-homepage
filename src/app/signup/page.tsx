import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import SignUpContent from '@/app/signup/components/SignUpContent';
import { getSiDo } from '@/networks/query/common/useGetSido';

export default async function Signup() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getSido'],
    queryFn: getSiDo,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SignUpContent />
    </HydrationBoundary>
  );
}
