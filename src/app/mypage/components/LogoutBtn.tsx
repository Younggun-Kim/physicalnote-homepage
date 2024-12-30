'use client';

import { useRouter } from 'next/navigation';
import { useAppStore, useSignupStore } from '@/store';
import usePlanStore from '@/store/plansStore';

export const LogoutBtn = () => {
  const router = useRouter();
  const { onLogout } = useAppStore((store) => store.actions);
  const signUpAction = useSignupStore((store) => store.actions);
  const handleClickLogout = () => {
    usePlanStore.getState().actions.reset();
    signUpAction.resetState();
    onLogout();
    router.push('/');
  };

  return (
    <button
      className={'font-sans font-normal text-xs text-gray1 tracking-tighter'}
      onClick={handleClickLogout}
    >
      로그아웃
    </button>
  );
};

export default LogoutBtn;
