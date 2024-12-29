import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { AxiosInstance } from '@/networks/axiosInstance';
import GetStatusResponseDto from '@/networks/dto/status/GetStatusResponseDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import SubscriptionRequestDto from '@/networks/dto/payment/SubscriptionRequestDto';

type ResponseType = AxiosResponse<GetStatusResponseDto, any>;

export const postSubscribe = async (dto: SubscriptionRequestDto) => {
  try {
    const url = `admin/v1/subscriptions`;
    return await AxiosInstance.post<GetStatusResponseDto>(url, dto);
  } catch (err) {
    return Promise.reject(err);
  }
};

const usePostSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, SubscriptionRequestDto>({
    mutationFn: postSubscribe,
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
