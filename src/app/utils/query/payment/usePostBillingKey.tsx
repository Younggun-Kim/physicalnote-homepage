import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import PostBillingKeyRequestDto from '@/api/dto/payment/billingKey/post/PostBillingKeyRequestDto';
import GetBillingKeysResponseDto from '@/api/dto/payment/GetBillingKeysResponseDto';
import { toast } from 'react-toastify';
import { ErrorResponseType } from '@/api/dto/ErrorResponseDto';
import { AxiosInstance } from '@/app/utils/service/axiosInstance';

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
