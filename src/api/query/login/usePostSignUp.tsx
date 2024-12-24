import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import LoginApi from '@/api/login';
import { SignUpResponseDto } from '@/api/dto/login/signUp/signUpResponseDto';
import SignUpRequestDto from '@/api/dto/login/signUp/signUpRequestDto';

export const usePostSignUp = () => {
  return useMutation<SignUpResponseDto, AxiosError, SignUpRequestDto>({
    mutationFn: LoginApi.postSignUp,
  });
};

export default usePostSignUp;
