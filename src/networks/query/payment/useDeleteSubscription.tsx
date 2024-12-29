'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { AxiosInstance } from '@/networks/axiosInstance';
import RefundResultDto from '@/networks/dto/payment/refund/RefundResultDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import RefundRequestDto from '@/networks/dto/payment/refund/RefundRequestDto';

type ResponseType = AxiosResponse<RefundResultDto, any>;

export const deleteSubscription = async (dto: RefundRequestDto) => {
  try {
    const url = `admin/v1/subscriptions?customerKey=${dto.customerKey}&cancelReason=${dto.cancelReason}`;
    return await AxiosInstance.delete<RefundResultDto>(url);
  } catch (err) {
    return Promise.reject(err);
  }
};

const useDeleteSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, RefundRequestDto>({
    mutationFn: deleteSubscription,
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
