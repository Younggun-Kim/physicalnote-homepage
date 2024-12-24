import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '@/api/payment';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import DeleteBillingKeyResponseDto from '@/api/dto/payment/billingKey/delete/DelteBillingKeyResponseDto';

type ResponseType = AxiosResponse<DeleteBillingKeyResponseDto, any>;

const useDeleteBillingKey = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, AxiosError, string>({
    mutationFn: (customerKey) => Api.deleteBillingKeys(customerKey),
    onSuccess: (response: ResponseType) => {
      /// query키를 무효화 시켜 리프레시
      queryClient.invalidateQueries({ queryKey: ['getBillingKeys'] });

      if (response.data) {
        toast(response.data.message);
      }
    },
    onError: () => {
      toast('서버에러입니다.\n관리자에게 문의해주세요.');
    },
  });
};

export default useDeleteBillingKey;
