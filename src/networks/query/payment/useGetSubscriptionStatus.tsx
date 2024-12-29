import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { AxiosInstance } from '@/networks/axiosInstance';
import GetStatusResponseDto from '@/networks/dto/status/GetStatusResponseDto';

type ResponseType = UseQueryResult<GetStatusResponseDto | undefined>;

export const getSubscriptionStatus = async (customerKey: string) => {
  try {
    const url = `admin/v1/subscriptions/status?customerKey=${customerKey}`;
    const response = await AxiosInstance.get<GetStatusResponseDto>(url);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data?.message) {
        toast(error.response.data.message);
        return;
      }
    }
    toast('서버에러입니다.\n관리자에게 문의해주세요.');
    return;
  }
};

export const useGetSubscriptionStatus = (customerKey: string): ResponseType => {
  return useQuery({
    enabled: customerKey.length > 0,
    queryKey: ['getSubscriptionStatus', customerKey],
    queryFn: () => getSubscriptionStatus(customerKey),
  });
};

export default useGetSubscriptionStatus;
