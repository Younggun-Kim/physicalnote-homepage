import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AxiosInstance } from '@/networks/axiosInstance';
import SignUpRequestDto from '@/networks/dto/login/signUp/signUpRequestDto';
import { SignUpResponseDto } from '@/networks/dto/login/signUp/signUpResponseDto';

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
