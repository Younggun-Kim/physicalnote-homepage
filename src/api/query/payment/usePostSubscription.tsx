import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '@/api/payment';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { ErrorResponseType } from '@/api/dto/ErrorResponseDto';
import GetStatusResponseDto from '@/api/dto/payment/status/GetStatusResponseDto';
import SubscriptionRequestDto from '@/api/dto/payment/SubscriptionRequestDto';

type ResponseType = AxiosResponse<GetStatusResponseDto, any>;

const usePostSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, SubscriptionRequestDto>({
    mutationFn: Api.postSubscribe,
    onSuccess: (_) => {
      /// query키를 무효화 시켜 리프레시
      queryClient.invalidateQueries({ queryKey: ['getSubscriptionStatus'] });
    },
    onError: (error) => {
      const msg = error.response?.data?.message;
      msg && toast(msg);
    },
  });
};

export default usePostSubscription;
