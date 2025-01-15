import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import CoachVerifyRequestDto from '@/networks/query/coach/verify/coachVerifyRequestDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import CoachVerifyPwResponseDto from '@/networks/query/coach/verify/coachVerifyPwResponseDto';

/**
 * 코치 계정 비밀번호 확인 API
 * */
export const postCoachVerify = async (requestDto: CoachVerifyRequestDto) => {
  try {
    const url = `admin/coach/verify/password`;
    const result = await AxiosInstance.post<CoachVerifyPwResponseDto>(url, requestDto);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const usePostCoachVerifyOpt = {
  mutationFn: postCoachVerify,
} as UseMutationOptions<CoachVerifyPwResponseDto, ErrorResponseType, CoachVerifyRequestDto, unknown>;

/**
 * 코치 계정 비밀번호 확인 Mutation
 * */
export const useCoachVerify = () => {
  return useMutation<CoachVerifyPwResponseDto, ErrorResponseType, CoachVerifyRequestDto>({
    ...usePostCoachVerifyOpt,
  });
};

export default useCoachVerify;
