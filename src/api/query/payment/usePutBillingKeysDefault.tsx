import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '@/api/payment';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import GetBillingKeysResponseDto from '@/api/dto/payment/GetBillingKeysResponseDto';
import { ErrorResponseType } from '@/api/dto/ErrorResponseDto';

type ResponseType = AxiosResponse<GetBillingKeysResponseDto, any>;

const usePutBillingKeysDefault = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, ErrorResponseType, string>({
    mutationFn: (customerKey) => Api.putBillingKeysDefault(customerKey),
    onSuccess: () => {
      /// query키를 무효화 시켜 리프레시
      queryClient.invalidateQueries({ queryKey: ['getBillingKeys'] });
      toast('결제 수단 변경 성공');
    },
    onError: (error) => {
      const msg = error.response?.data?.message;
      toast(msg ?? '서버에러');
    },
  });
};

export default usePutBillingKeysDefault;
