import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getSiDo } from '@/networks/query/common/useGetSido';
import MyPageTeamContent from '@/app/mypage/team/components/TeamContent';

export default async function MyPageTeamPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getSido'],
    queryFn: getSiDo,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyPageTeamContent />
    </HydrationBoundary>
  );
}
