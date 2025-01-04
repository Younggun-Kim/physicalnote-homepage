'use client';

import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store';
import { resetStore } from '@/store/storeUtils';

export const LogoutBtn = () => {
  const router = useRouter();
  const { onLogout } = useAppStore((store) => store.actions);
  const handleClickLogout = () => {
    resetStore();
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
