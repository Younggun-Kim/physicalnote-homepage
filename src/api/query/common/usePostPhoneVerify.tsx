import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import CommonApi from '@/api/common';
import { PhoneVerifyRequestDto, PhoneVerifyResponseDto } from '@/api/dto';

export const usePostPhoneVerify = () => {
  return useMutation<PhoneVerifyResponseDto, AxiosError, PhoneVerifyRequestDto>({
    mutationFn: CommonApi.postPhoneVerify,
  });
};

export default usePostPhoneVerify;
