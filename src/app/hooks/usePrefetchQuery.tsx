import customQueryClient from '@/networks/query/customQueryClient';
import { getUserInfoQueryOption } from '@/networks/query/user/useGetUserDetail';
import { getSubscribePlansOption } from '@/networks/query/payment/useGetSubscriptionPlans';
import { postReloginOption } from '@/networks/query/login/useReLogin';
import { postPhoneSendOpt } from '@/networks/query/common/usePhoneSend';
import { postAuthCodeOpt } from '@/networks/query/common/useAuthCodeVerify';
import { postFindIdOpt } from '@/networks/query/login/findId/useFindId';
import { postFindPwStep1Opt } from '@/networks/query/login/findPw/useFindPwStep1';
import { postFindPwStep2Opt } from '@/networks/query/login/findPw/useFindPwStep2';
import { postContactOpt } from '@/networks/query/useContact';
import { getBillingKeyOpt } from '@/networks/query/payment/useGetBillingKeys';
import { getSidoOpt } from '@/networks/query/common/useGetSido';

/**
 * React Query Prefetch를 위한 Hook
 */
const usePrefetchQuery = async () => {
  await customQueryClient.prefetchQuery(getSubscribePlansOption);
  await customQueryClient.prefetchQuery(getUserInfoQueryOption);
  await customQueryClient.prefetchQuery(getSubscribePlansOption);
  await customQueryClient.prefetchQuery(getBillingKeyOpt);
  await customQueryClient.prefetchQuery(getSidoOpt);

  /** Mutation 등록 */
  customQueryClient.setMutationDefaults(['postRelogin'], postReloginOption);
  customQueryClient.setMutationDefaults(['postPhoneSend'], postPhoneSendOpt);
  customQueryClient.setMutationDefaults(['postAuthCode'], postAuthCodeOpt);
  customQueryClient.setMutationDefaults(['postFindId'], postFindIdOpt);
  customQueryClient.setMutationDefaults(['postFindPwStep1'], postFindPwStep1Opt);
  customQueryClient.setMutationDefaults(['postFindPwStep2'], postFindPwStep2Opt);
  customQueryClient.setMutationDefaults(['postContact'], postContactOpt);
};

export default usePrefetchQuery;
