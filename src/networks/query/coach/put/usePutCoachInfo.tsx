import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import PutCoachInfoRequestDto from '@/networks/query/coach/put/putCoachInfoRequestDto';
import CoachInfoResponseDto from '@/networks/dto/coach/info/CoachInfoResponseDto';

/**
 * 코치 팀 정보 수정 API
 */
export const putCoachInfo = async (dto: PutCoachInfoRequestDto) => {
  try {
    const url = `admin/coach/info`;
    const result = await AxiosInstance.put<CoachInfoResponseDto>(url, dto);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const putCoachInfoOpt = {
  mutationFn: putCoachInfo,
} as UseMutationOptions<CoachInfoResponseDto, ErrorResponseType, PutCoachInfoRequestDto>;

export const usePutCoachInfo = () => {
  return useMutation({ ...putCoachInfoOpt });
};

export default usePutCoachInfo;
