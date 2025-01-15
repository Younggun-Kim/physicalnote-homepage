'use client';

import { ReactNode, useEffect } from 'react';
import useReLogin from '@/networks/query/login/useReLogin';
import { useAppStore, useBillingKeyStore } from '@/store';
import useGetUserDetail from '@/networks/query/user/useGetUserDetail';
import usePlanStore from '@/store/plansStore';
import useGetSubscriptionPlans from '@/networks/query/payment/useGetSubscriptionPlans';
import useGetBillingKeys from '@/networks/query/payment/useGetBillingKeys';
import useGetCoachInfo from '@/networks/query/coach/useGetCoachInfo';
import useCoachInfoStore from '@/store/coachInfoStore';
import useRefetchQuery from '@/app/hooks/useRefetchQuery';
import useGetSubscriptionStatus from '@/networks/query/payment/useGetSubscriptionStatus';
import useSubscriptionStore from '@/store/subscriptionStore';

interface Props {
  children: ReactNode;
}

const CheckLoginState = ({ children }: Props) => {
  const { data: userData } = useGetUserDetail();
  const { data: plansData } = useGetSubscriptionPlans();
  const { data: billingKeyData } = useGetBillingKeys();
  const { data: coachInfoData } = useGetCoachInfo();

  const { defaultBillingKey } = useBillingKeyStore((store) => store.state);
  const { data: subscriptionData } = useGetSubscriptionStatus(defaultBillingKey?.customerKey ?? '');

  const reLoginMutation = useReLogin();

  const { refetchAll } = useRefetchQuery();
  const { onLogin, setUserInfo } = useAppStore((state) => state.actions);
  const { setPlans } = usePlanStore((state) => state.actions);
  const { setBillingKey } = useBillingKeyStore((store) => store.actions);
  const { onSet: setCoachInfo } = useCoachInfoStore((store) => store.actions);
  const { setSubscription } = useSubscriptionStore((store) => store.actions);

  useEffect(() => {
    reLoginMutation
      .mutateAsync()
      .then((response) => {
        if (response.token) {
          onLogin(response.token);
          refetchAll();
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!userData) {
      return;
    }
    setUserInfo(userData);
  }, [userData]);

  useEffect(() => {
    if (!billingKeyData) return;
    setBillingKey(billingKeyData);
  }, [billingKeyData, userData]);

  useEffect(() => {
    if (!coachInfoData) return;
    setCoachInfo(coachInfoData);
  }, [coachInfoData]);

  useEffect(() => {
    if (!plansData) {
      return;
    }
    setPlans(plansData);
  }, [plansData]);

  useEffect(() => {
    if (defaultBillingKey?.customerKey == undefined) return;
    if (subscriptionData == undefined) return;
    setSubscription(subscriptionData);
  }, [subscriptionData, defaultBillingKey]);

  return <>{children}</>;
};

export default CheckLoginState;
