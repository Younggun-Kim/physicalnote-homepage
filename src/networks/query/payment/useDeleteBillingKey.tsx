import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { AxiosInstance } from '@/networks/axiosInstance';
import DeleteBillingKeyResponseDto from '@/networks/dto/billingKey/delete/DelteBillingKeyResponseDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';

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
