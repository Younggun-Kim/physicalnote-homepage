import useGetUserDetail from '@/networks/query/user/useGetUserDetail';
import useGetBillingKeys from '@/networks/query/payment/useGetBillingKeys';
import { useCallback } from 'react';
import useGetCoachInfo from '@/networks/query/coach/useGetCoachInfo';

/**
 * 모든 필요한 데이터를 한번에 refetch하는 커스텀 훅
 */
const useRefetchQuery = () => {
  const { refetch: userRefetch } = useGetUserDetail();
  const { refetch: billingRefetch } = useGetBillingKeys();
  const { refetch: coachRefetch } = useGetCoachInfo();

  const refetchAll = useCallback(async () => {
    try {
      const results = await Promise.all([
        userRefetch().catch((e) => ({ error: e, type: 'user' })),
        billingRefetch().catch((e) => ({ error: e, type: 'billing' })),
        coachRefetch().catch((e) => ({ error: e, type: 'coach' })),
      ]);
      console.log('Refetch results:', results);
    } catch (error) {
      console.error('Error during multi-refetch:', error);
      throw error;
    }
  }, [userRefetch, billingRefetch, coachRefetch]);

  return { refetchAll };
};
export default useRefetchQuery;
