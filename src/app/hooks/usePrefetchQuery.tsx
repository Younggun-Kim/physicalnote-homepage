import customQueryClient from '@/networks/query/customQueryClient';
import { getUserInfoQueryOption } from '@/networks/query/user/useGetUserDetail';
import { getSubscribePlansOption } from '@/networks/query/payment/useGetSubscriptionPlans';
import { postReloginOption } from '@/networks/query/login/useReLogin';
import { postPhoneSendOpt } from '@/networks/query/common/usePhoneSend';
import { postAuthCodeOpt } from '@/networks/query/common/useAuthCodeVerify';
import { postFindIdOpt } from '@/networks/query/login/findId/useFindId';
import { postFindPwStep1Opt, useFindPwStep1 } from '@/networks/query/login/findPw/useFindPwStep1';
import { postFindPwStep2Opt } from '@/networks/query/login/findPw/useFindPwStep2';

/**
 * React Query Prefetch를 위한 Hook
 */
const usePrefetchQuery = async () => {
  await customQueryClient.prefetchQuery(getSubscribePlansOption);
  await customQueryClient.prefetchQuery(getUserInfoQueryOption);

  /** Mutation 등록 */
  customQueryClient.setMutationDefaults(['postRelogin'], postReloginOption);
  customQueryClient.setMutationDefaults(['postPhoneSend'], postPhoneSendOpt);
  customQueryClient.setMutationDefaults(['postAuthCode'], postAuthCodeOpt);
  customQueryClient.setMutationDefaults(['postFindId'], postFindIdOpt);
  customQueryClient.setMutationDefaults(['useFindPwStep1'], postFindPwStep1Opt);
  customQueryClient.setMutationDefaults(['useFindPwStep2'], postFindPwStep2Opt);
};

export default usePrefetchQuery;
