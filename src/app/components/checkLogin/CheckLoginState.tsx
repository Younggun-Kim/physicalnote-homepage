'use client';

import { ReactNode, useEffect, useState } from 'react';
import useReLogin from '@/networks/query/login/useReLogin';
import { useAppStore } from '@/store';
import useGetUserDetail from '@/networks/query/user/useGetUserDetail';
import usePlanStore from '@/store/plansStore';
import useGetSubscriptionPlans from '@/networks/query/payment/useGetSubscriptionPlans';

interface Props {
  children: ReactNode;
}

const CheckLoginState = ({ children }: Props) => {
  const [reload, setReload] = useState<boolean>(false);
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
        setReload(response.token.length > 0);
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
    if (!plansData) {
      return;
    }
    setPlans(plansData);
  }, [reload, plansData]);

  return <>{children}</>;
};

export default CheckLoginState;
