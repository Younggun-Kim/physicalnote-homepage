import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import DeleteBillingKeyResponseDto from '@/api/dto/payment/billingKey/delete/DelteBillingKeyResponseDto';
import { AxiosInstance } from '@/app/networks/axiosInstance';
import { ErrorResponseType } from '@/api/dto/ErrorResponseDto';

type ResponseType = AxiosResponse<DeleteBillingKeyResponseDto, any>;

export const deleteBillingKeys = async (customerKey: string) => {
  try {
    const url = `admin/v1/subscriptions/billing-keys/${customerKey}`;
    return await AxiosInstance.delete<DeleteBillingKeyResponseDto>(url);
  } catch (err) {
    return Promise.reject(err);
  }
};

const useDeleteBillingKey = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, string>({
    mutationFn: (customerKey) => deleteBillingKeys(customerKey),
    onSuccess: (response: ResponseType) => {
      /// query키를 무효화 시켜 리프레시
      queryClient.invalidateQueries({ queryKey: ['getBillingKeys'] });

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

export default useDeleteBillingKey;
