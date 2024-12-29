import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import PlanResponseDto from '@/api/dto/payment/PlanResponseDto';
import { AxiosInstance } from '@/app/networks/axiosInstance';

type ResponseType = UseQueryResult<PlanResponseDto>;

export const getSubscriptionPlans = async () => {
  try {
    const url = `admin/v1/subscriptions/plans`;
    const result = await AxiosInstance.get<PlanResponseDto[]>(url);
    return result.data?.length > 0 ? result.data[0] : undefined;
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

export const useGetSubscriptionPlans = (): ResponseType => {
  return useQuery({
    queryKey: ['getPlans'],
    queryFn: getSubscriptionPlans,
  });
};

export default useGetSubscriptionPlans;
