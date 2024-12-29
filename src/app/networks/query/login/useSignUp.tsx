import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SignUpResponseDto } from '@/api/dto/login/signUp/signUpResponseDto';
import SignUpRequestDto from '@/api/dto/login/signUp/signUpRequestDto';
import { AxiosInstance } from '@/app/networks/axiosInstance';

/**
 * 회원가입 API
 */
export const postSignUp = async (dto: SignUpRequestDto) => {
  try {
    const url = `login/signin/coach`;
    const result = await AxiosInstance.post<SignUpResponseDto>(url, dto);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const usePostSignUp = () => {
  return useMutation<SignUpResponseDto, AxiosError, SignUpRequestDto>({
    mutationFn: postSignUp,
  });
};

export default usePostSignUp;
