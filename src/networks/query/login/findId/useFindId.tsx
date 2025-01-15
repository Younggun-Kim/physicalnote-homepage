import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import { PhoneVerifyRequestDto } from '@/networks/dto/common';
import { FindIdResponseDto } from '@/networks/query/login/findId/findIdResponseDto';
import { AxiosInstance } from '@/networks/axiosInstance';

/**
 * 아이디 찾기 API
 */
export const postFindId = async ({ phoneNumber, authCode }: PhoneVerifyRequestDto) => {
  try {
    const url = `login/find_id`;
    const response = await AxiosInstance.post<FindIdResponseDto>(url, { phoneNumber, authCode });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postFindIdOpt = {
  mutationFn: postFindId,
} as UseMutationOptions<FindIdResponseDto, ErrorResponseType, PhoneVerifyRequestDto>;

export const useFindId = () => {
  return useMutation<FindIdResponseDto, ErrorResponseType, PhoneVerifyRequestDto>({
    mutationFn: postFindId,
  });
};
