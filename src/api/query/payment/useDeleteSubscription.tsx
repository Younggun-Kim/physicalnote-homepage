'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import RefundResultDto from '@/api/dto/payment/refund/RefundResultDto';
import { ErrorResponseType } from '@/api/dto/ErrorResponseDto';
import RefundRequestDto from '@/api/dto/payment/refund/RefundRequestDto';
import Api from '@/api/payment';

type ResponseType = AxiosResponse<RefundResultDto, any>;

const useDeleteSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, RefundRequestDto>({
    mutationFn: Api.deleteSubscription,
    onSuccess: (response: ResponseType) => {
      /// query키를 무효화 시켜 리프레시
      queryClient.invalidateQueries({ queryKey: ['getSubscriptionStatus'] });

      if (response.data) {
        toast(response.data.message);
      }
    },
    onError: (error) => {
      const msg = error.response?.data?.message;
      toast(msg ?? '서버에러');
    },
  });
};

export default useDeleteSubscription;
