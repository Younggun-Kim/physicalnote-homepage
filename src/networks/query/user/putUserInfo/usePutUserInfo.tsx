import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import UserDetailResponseDto from '@/networks/dto/user/detail/userDetailResponseDto';
import PutUserInfoRequestDto from '@/networks/query/user/putUserInfo/putUserInfoRequestDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';

/**
 * 유저 정보 수정 API
 */
export const putUserInfo = async (dto: PutUserInfoRequestDto) => {
  try {
    const url = `admin/coach`;
    const result = await AxiosInstance.put<UserDetailResponseDto>(url, dto);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const putUserInfoOpt = {
  mutationFn: putUserInfo,
} as UseMutationOptions<UserDetailResponseDto, ErrorResponseType, PutUserInfoRequestDto>;

export const usePutUserInfo = () => {
  return useMutation({ ...putUserInfoOpt });
};

export default usePutUserInfo;
