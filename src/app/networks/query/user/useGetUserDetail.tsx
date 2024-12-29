import { useQuery } from '@tanstack/react-query';
import UserDetailResponseDto from '@/api/dto/user/detail/userDetailResponseDto';
import { AxiosInstance } from '@/app/networks/axiosInstance';

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
