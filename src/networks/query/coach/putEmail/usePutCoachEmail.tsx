import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import PutCoachEmailResponseDto from '@/networks/query/coach/putEmail/putCoachEmailResponseDto';
import PutCoachEmailRequestDto from '@/networks/query/coach/putEmail/putCoachEmailRequestDto';

/**
 * 영수증 이메일 정보 수정 API
 */
export const putCoachEmail = async (dto: PutCoachEmailRequestDto) => {
  try {
    const url = `admin/coach/email`;
    const result = await AxiosInstance.put<PutCoachEmailResponseDto>(url, dto);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const putCoachEmailOpt = {
  mutationFn: putCoachEmail,
} as UseMutationOptions<PutCoachEmailResponseDto, ErrorResponseType, PutCoachEmailRequestDto>;

export const usePutCoachEmail = () => {
  return useMutation({ ...putCoachEmailOpt });
};

export default usePutCoachEmail;
