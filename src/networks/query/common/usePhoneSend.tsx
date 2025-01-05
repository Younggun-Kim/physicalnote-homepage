import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import axios from 'axios';
import MessageResponseDto from '@/app/api/dto/MessageResponseDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';

export interface PhoneSendRequestDto {
  phoneNumber: string;
}

/**
 * 휴대폰 인증 전송 API
 */
export const postPhoneSend = async ({ phoneNumber }: PhoneSendRequestDto) => {
  try {
    const url = `https://dev.physicalnote.com/auth/phone/send`;
    const response = await axios.post<MessageResponseDto>(url, null, {
      params: { phoneNumber },
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postPhoneSendOpt = {
  mutationFn: postPhoneSend,
  onError: (error: ErrorResponseType) => {
    toast(error.response?.data?.message ?? '서버에러');
  },
} as UseMutationOptions<MessageResponseDto, ErrorResponseType, PhoneSendRequestDto>;

export const usePhoneSend = () => {
  return useMutation<MessageResponseDto, ErrorResponseType, PhoneSendRequestDto>({
    mutationFn: postPhoneSend,
  });
};
