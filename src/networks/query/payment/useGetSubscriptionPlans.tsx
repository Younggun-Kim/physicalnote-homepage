import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';

type ResponseType = UseQueryResult<PlanResponseDto[]>;

export const getSubscriptionPlans = async () => {
  try {
    const url = `/subscriptions/plans`;
    const result = await AxiosInstance.get<PlanResponseDto[]>(url);
    return result.data ?? [];
  } catch (error) {}
};

export const getSubscribePlansOption = {
  queryKey: ['getPlans'],
  queryFn: getSubscriptionPlans,
};

export const useGetSubscriptionPlans = (): ResponseType => {
  return useQuery(getSubscribePlansOption);
};

export default useGetSubscriptionPlans;
