import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import GetStatusResponseDto from '@/networks/dto/status/GetStatusResponseDto';

type ResponseType = UseQueryResult<GetStatusResponseDto | undefined>;

export const getSubscriptionStatus = async (customerKey: string) => {
  try {
    const url = `admin/v1/subscriptions/status?customerKey=${customerKey}`;
    const response = await AxiosInstance.get<GetStatusResponseDto>(url);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
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
