import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import { PhoneVerifyRequestDto } from '@/networks/dto/common';
import { FindIdResponseDto } from '@/networks/query/login/findId/findIdResponseDto';
import { AxiosInstance } from '@/networks/axiosInstance';

/**
 * 아이디 찾기 API
 */
export const postFindPwStep1 = async ({ phoneNumber, authCode }: PhoneVerifyRequestDto) => {
  try {
    const url = `login/find_pw/step1`;
    const response = await AxiosInstance.post<FindIdResponseDto>(url, { phoneNumber, authCode });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postFindPwStep1Opt = {
  mutationFn: postFindPwStep1,
} as UseMutationOptions<FindIdResponseDto, ErrorResponseType, PhoneVerifyRequestDto>;

export const useFindPwStep1 = () => {
  return useMutation<FindIdResponseDto, ErrorResponseType, PhoneVerifyRequestDto>({
    mutationFn: postFindPwStep1,
  });
};
