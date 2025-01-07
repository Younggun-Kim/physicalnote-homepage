'use client';

import { ReactNode, useEffect } from 'react';
import useReLogin from '@/networks/query/login/useReLogin';
import { useAppStore } from '@/store';
import useGetUserDetail from '@/networks/query/user/useGetUserDetail';
import usePlanStore from '@/store/plansStore';
import useGetSubscriptionPlans from '@/networks/query/payment/useGetSubscriptionPlans';

interface Props {
  children: ReactNode;
}

const CheckLoginState = ({ children }: Props) => {
  const { data: userData } = useGetUserDetail();
  const { data: plansData } = useGetSubscriptionPlans();
  const reLoginMutation = useReLogin();

  const { onLogin, setUserInfo } = useAppStore((state) => state.actions);
  const { setPlans } = usePlanStore((state) => state.actions);

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
    console.log(plansData);
    if (!plansData) {
      return;
    }
    setPlans(plansData);
  }, [plansData]);

  return <>{children}</>;
};

export default CheckLoginState;
