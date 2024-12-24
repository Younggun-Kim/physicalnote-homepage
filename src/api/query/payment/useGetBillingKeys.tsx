import { useQuery, UseQueryResult } from '@tanstack/react-query';
import Api from '@/api/payment';
import GetBillingKeysResponseDto from '@/api/dto/payment/GetBillingKeysResponseDto';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type ResponseType = UseQueryResult<GetBillingKeysResponseDto[]>;
export const useGetBillingKeys = (): ResponseType => {
  return useQuery({
    queryKey: ['getBillingKeys'],
    queryFn: async () => {
      try {
        const response = await Api.getBillingKeys();

        if (response.data && response.data.length > 0) {
          return response.data;
        }

        return [];
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

export default useGetBillingKeys;
