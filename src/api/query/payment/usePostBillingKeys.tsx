import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '@/api/payment';
import { AxiosResponse } from 'axios';
import PostBillingKeyRequestDto from '@/api/dto/payment/billingKey/post/PostBillingKeyRequestDto';
import GetBillingKeysResponseDto from '@/api/dto/payment/GetBillingKeysResponseDto';
import { toast } from 'react-toastify';
import { ErrorResponseType } from '@/api/dto/ErrorResponseDto';

type ResponseType = AxiosResponse<GetBillingKeysResponseDto, any>;

const usePostBillingKey = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, PostBillingKeyRequestDto>({
    mutationFn: Api.postBillingKeys,
    onSuccess: () => {
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
