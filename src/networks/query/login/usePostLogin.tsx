import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AxiosInstance } from '@/networks/axiosInstance';
import { LoginRequestDto, LoginResponseDto } from '@/networks/dto/login';

/**
 * 로그인 API
 */
export const postLogin = async (dto: LoginRequestDto) => {
  try {
    const url = `login/admin`;
    const result = await AxiosInstance.post<LoginResponseDto>(url, dto);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const usePostLogin = () => {
  return useMutation<LoginResponseDto, AxiosError, LoginRequestDto>({
    mutationFn: postLogin,
  });
};

export default usePostLogin;
