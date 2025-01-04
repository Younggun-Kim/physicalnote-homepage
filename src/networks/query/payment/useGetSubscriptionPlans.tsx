import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { AxiosInstance } from '@/networks/axiosInstance';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';

type ResponseType = UseQueryResult<PlanResponseDto[]>;

export const getSubscriptionPlans = async () => {
  try {
    const url = `/subscriptions/plans`;
    const result = await AxiosInstance.get<PlanResponseDto[]>(url);
    return result.data ?? [];
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data?.message) {
        toast(error.response.data.message);
        return;
      }
    }
    toast('서버에러');
  }
};

export const getSubscribePlansOption = {
  queryKey: ['getPlans'],
  queryFn: getSubscriptionPlans,
};

export const useGetSubscriptionPlans = (): ResponseType => {
  return useQuery(getSubscribePlansOption);
};

export default useGetSubscriptionPlans;
