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
  enabled: hasTokenInCookies(),
  queryKey: ['getUserInfo'],
  queryFn: getUserInfo,
};

export const useGetUserDetail = () => {
  return useQuery(getUserInfoQueryOption);
};

export default useGetUserDetail;
