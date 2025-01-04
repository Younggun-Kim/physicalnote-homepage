import { ReactNode } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import customQueryClient from '@/networks/query/customQueryClient';
import CheckLoginState from '@/app/components/checkLogin/CheckLoginState';
import usePrefetchQuery from '@/app/hooks/usePrefetchQuery';

interface Props {
  children: ReactNode;
}

const CheckLoginWrapper = async ({ children }: Props) => {
  await usePrefetchQuery();
  return (
    <HydrationBoundary state={dehydrate(customQueryClient)}>
      <CheckLoginState>{children}</CheckLoginState>
    </HydrationBoundary>
  );
};

export default CheckLoginWrapper;
