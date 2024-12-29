import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { AxiosInstance } from '@/networks/axiosInstance';
import GetBillingKeysResponseDto from '@/networks/dto/payment/GetBillingKeysResponseDto';

type ResponseType = UseQueryResult<GetBillingKeysResponseDto[]>;

export const getBillingKeysQuery = async () => {
  try {
    const url = `admin/v1/subscriptions/billing-keys`;
    const response = await AxiosInstance.get<GetBillingKeysResponseDto[]>(url);

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
    return [];
  }
};

export const useGetBillingKeys = (): ResponseType => {
  return useQuery({
    queryKey: ['getBillingKeys'],
    queryFn: getBillingKeysQuery,
  });
};

export default useGetBillingKeys;
