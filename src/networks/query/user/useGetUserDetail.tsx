import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import UserDetailResponseDto from '@/networks/dto/user/detail/userDetailResponseDto';

export const getUserInfo = async () => {
  try {
    const url = `admin/coach`;
    const result = await AxiosInstance.get<UserDetailResponseDto>(url);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const useGetUserDetail = () => {
  return useQuery({
    queryKey: ['getUserInfo'],
    queryFn: getUserInfo,
  });
};

export default useGetUserDetail;
