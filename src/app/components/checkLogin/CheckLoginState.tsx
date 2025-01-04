'use client';

import { ReactNode, useEffect, useState } from 'react';
import useReLogin from '@/networks/query/login/useReLogin';
import { useAppStore } from '@/store';
import useGetUserDetail from '@/networks/query/user/useGetUserDetail';
import usePlanStore from '@/store/plansStore';
import useGetSubscriptionPlans from '@/networks/query/payment/useGetSubscriptionPlans';
import { QueryClient } from '@tanstack/react-query';

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
        const queryClient = new QueryClient();
        queryClient.invalidateQueries({ queryKey: ['getUserInfo'] });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!reload || !userData) {
      return;
    }
    setUserInfo(userData);
  }, [reload, userData]);

  useEffect(() => {
    if (!plansData) {
      return;
    }
    setPlans(plansData);
  }, [reload, plansData]);

  return <>{children}</>;
};

export default CheckLoginState;
