import { useQuery, UseQueryResult } from '@tanstack/react-query';
import Api from '@/api/payment';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import GetStatusResponseDto from '@/api/dto/payment/status/GetStatusResponseDto';

type ResponseType = UseQueryResult<GetStatusResponseDto>;

export const useGetSubscriptionStatus = (customerKey: string): ResponseType => {
  return useQuery({
    enabled: customerKey.length > 0,
    queryKey: ['getSubscriptionStatus'],
    queryFn: async () => {
      try {
        const response = await Api.getSubscriptionStatus(customerKey);

        return response.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.data?.message) {
            toast(error.response.data.message);
            return;
          }
        }
        toast('서버에러입니다.\n관리자에게 문의해주세요.');
      }
    },
  });
};

export default useGetSubscriptionStatus;
