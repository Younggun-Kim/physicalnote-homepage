import customQueryClient from '@/networks/query/customQueryClient';
import { getUserInfoQueryOption } from '@/networks/query/user/useGetUserDetail';
import { getSubscribePlansOption } from '@/networks/query/payment/useGetSubscriptionPlans';
import { postReloginOption } from '@/networks/query/login/useReLogin';

/**
 * React Query Prefetch를 위한 Hook
 */
const usePrefetchQuery = async () => {
  await customQueryClient.prefetchQuery(getSubscribePlansOption);
  await customQueryClient.prefetchQuery(getUserInfoQueryOption);

  /** Mutation 등록 */
  customQueryClient.setMutationDefaults(['postRelogin'], postReloginOption);
};

export default usePrefetchQuery;
