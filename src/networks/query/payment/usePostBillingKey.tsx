import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { AxiosInstance } from '@/networks/axiosInstance';
import GetBillingKeysResponseDto from '@/networks/dto/payment/GetBillingKeysResponseDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import PostBillingKeyRequestDto from '@/networks/dto/billingKey/post/PostBillingKeyRequestDto';

type ResponseType = AxiosResponse<GetBillingKeysResponseDto, any>;

export const postBillingKeys = async (dto: PostBillingKeyRequestDto) => {
  try {
    const url = `admin/v1/subscriptions/billing-keys`;
    return await AxiosInstance.post<GetBillingKeysResponseDto>(url, dto);
  } catch (err) {
    return Promise.reject(err);
  }
};

const usePostBillingKey = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, PostBillingKeyRequestDto>({
    mutationFn: postBillingKeys,
    onSuccess: (_) => {
      /// query키를 무효화 시켜 리프레시
      queryClient.invalidateQueries({ queryKey: ['getBillingKeys'] });
    },
    onError: (error) => {
      const msg = error.response?.data?.message;
      msg && toast(msg);
    },
  });
};

export default usePostBillingKey;
