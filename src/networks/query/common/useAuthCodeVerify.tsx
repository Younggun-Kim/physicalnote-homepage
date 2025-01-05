import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import { PhoneVerifyResponseDto, PhoneVerifyRequestDto } from '@/networks/dto/common';

/**
 * 휴대폰 인증 전송 API
 */
export const postAuthCode = async ({ phoneNumber, authCode }: PhoneVerifyRequestDto) => {
  try {
    const url = `https://dev.physicalnote.com/auth/phone/verify`;
    const response = await axios.post<PhoneVerifyResponseDto>(url, null, {
      params: { phoneNumber, authCode },
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postAuthCodeOpt = {
  mutationFn: postAuthCode,
  onError: (error: ErrorResponseType) => {
    toast(error.response?.data?.message ?? '서버에러');
  },
} as UseMutationOptions<PhoneVerifyResponseDto, ErrorResponseType, PhoneVerifyRequestDto>;

export const useAuthCodeVerify = () => {
  return useMutation<PhoneVerifyResponseDto, ErrorResponseType, PhoneVerifyRequestDto>({
    mutationFn: postAuthCode,
  });
};
