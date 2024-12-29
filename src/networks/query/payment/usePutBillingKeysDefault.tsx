import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AxiosInstance } from '@/networks/axiosInstance';
import GetBillingKeysResponseDto from '@/networks/dto/payment/GetBillingKeysResponseDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';

type ResponseType = AxiosResponse<GetBillingKeysResponseDto, any>;

export const putBillingKeysDefault = async (customerKey: string) => {
  try {
    const url = `admin/v1/subscriptions/billing-keys/${customerKey}/default`;
    return await AxiosInstance.put<GetBillingKeysResponseDto>(url);
  } catch (err) {
    return Promise.reject(err);
  }
};

const usePutBillingKeysDefault = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, string>({
    mutationFn: (customerKey) => putBillingKeysDefault(customerKey),
    onSuccess: (_) => {
      /// query키를 무효화 시켜 리프레시
      queryClient.invalidateQueries({ queryKey: ['getBillingKeys'] });
      toast('결제 수단 변경 성공');
    },
    onError: (error) => {
      const msg = error.response?.data?.message;
      toast(msg ?? '서버에러');
    },
  });
};

export default usePutBillingKeysDefault;
