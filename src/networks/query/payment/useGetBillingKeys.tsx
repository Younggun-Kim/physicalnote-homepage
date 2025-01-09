import { UndefinedInitialDataOptions, useQuery, UseQueryResult } from '@tanstack/react-query';
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
    return [];
  }
};

export const getBillingKeyOpt = {
  queryKey: ['getBillingKeys'],
  queryFn: getBillingKeysQuery,
} as UndefinedInitialDataOptions<GetBillingKeysResponseDto[], Error, GetBillingKeysResponseDto[], string[]>;

export const useGetBillingKeys = (): ResponseType => {
  return useQuery({
    ...getBillingKeyOpt,
  });
};

export default useGetBillingKeys;
