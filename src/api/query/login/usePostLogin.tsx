import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import LoginApi from '@/api/login';
import { LoginRequestDto, LoginResponseDto } from '@/api/dto';

export const usePostLogin = () => {
  return useMutation<LoginResponseDto, AxiosError, LoginRequestDto>({
    mutationFn: LoginApi.postLogin,
  });
};

export default usePostLogin;
