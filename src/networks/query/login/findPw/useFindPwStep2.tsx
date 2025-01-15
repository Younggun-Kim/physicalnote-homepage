import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import { AxiosInstance } from '@/networks/axiosInstance';
import { FindPwStep2ResponseDto } from '@/networks/query/login/findPw/findPwStep2ResponseDto';
import { FindPwStep2RequestDto } from '@/networks/query/login/findPw/findPwStep2RequestDto';

/**
 * 아이디 찾기 API
 */
export const postFindPwStep2 = async (dto: FindPwStep2RequestDto) => {
  try {
    const url = `login/find_pw/step2`;
    const response = await AxiosInstance.post<FindPwStep2ResponseDto>(url, dto);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postFindPwStep2Opt = {
  mutationFn: postFindPwStep2,
} as UseMutationOptions<FindPwStep2ResponseDto, ErrorResponseType, FindPwStep2RequestDto>;

export const useFindPwStep2 = () => {
  return useMutation<FindPwStep2ResponseDto, ErrorResponseType, FindPwStep2RequestDto>({
    mutationFn: postFindPwStep2,
  });
};
