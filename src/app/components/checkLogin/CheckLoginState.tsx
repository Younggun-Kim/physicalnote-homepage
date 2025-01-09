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

interface Props {
  children: ReactNode;
}

const CheckLoginState = ({ children }: Props) => {
  const { data: userData } = useGetUserDetail();
  const { data: plansData } = useGetSubscriptionPlans();
  const { data: billingKeyData } = useGetBillingKeys();
  const { data: coachInfoData } = useGetCoachInfo();

  const reLoginMutation = useReLogin();

  const { onLogin, setUserInfo } = useAppStore((state) => state.actions);
  const { setPlans } = usePlanStore((state) => state.actions);
  const { setBillingKey } = useBillingKeyStore((store) => store.actions);
  const { onSet: setCoachInfo } = useCoachInfoStore((store) => store.actions);

  useEffect(() => {
    reLoginMutation
      .mutateAsync()
      .then((response) => {
        if (response.token) {
          onLogin(response.token);
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
  }, [billingKeyData]);

  useEffect(() => {
    if (!coachInfoData) return;
    setCoachInfo(coachInfoData);
  }, [coachInfoData]);

  useEffect(() => {
    console.log(plansData);
    if (!plansData) {
      return;
    }
    setPlans(plansData);
  }, [plansData]);

  return <>{children}</>;
};

export default CheckLoginState;
