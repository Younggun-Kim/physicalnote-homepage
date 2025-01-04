import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import UserDetailResponseDto from '@/networks/dto/user/detail/userDetailResponseDto';
import { hasTokenInCookies } from '@/utils/cookieUtils';

export const getUserInfo = async () => {
  try {
    const url = `admin/coach`;
    const result = await AxiosInstance.get<UserDetailResponseDto>(url);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getUserInfoQueryOption = {
  enabled: await hasTokenInCookies(),
  queryKey: ['getUserInfo'],
  queryFn: getUserInfo,
  staleTime: 0,
  structuralSharing: false, // 데이터가 같아도 새 참조 반환
};

export const useGetUserDetail = () => {
  return useQuery(getUserInfoQueryOption);
};

export default useGetUserDetail;
