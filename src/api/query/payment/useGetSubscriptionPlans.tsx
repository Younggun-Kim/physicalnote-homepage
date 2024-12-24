import { useQuery, UseQueryResult } from '@tanstack/react-query';
import Api from '@/api/payment';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import PlanResponseDto from '@/api/dto/payment/PlanResponseDto';

type ResponseType = UseQueryResult<PlanResponseDto>;

export const useGetSubscriptionPlans = (): ResponseType => {
  return useQuery({
    queryKey: ['getPlans'],
    queryFn: async () => {
      try {
        const result = await Api.getSubscriptionPlans();
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
    },
  });
};

export default useGetSubscriptionPlans;
