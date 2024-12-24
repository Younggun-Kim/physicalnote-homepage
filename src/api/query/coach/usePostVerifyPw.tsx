import { useMutation } from '@tanstack/react-query';
import CoachApi from '@/api/coach';
import { AxiosError } from 'axios';
import CoachVerifyPwResponseDto from '@/api/dto/coach/verify/CoachVerifyPwResponseDto';
import CoachVerifyPwRequestDto from '@/api/dto/coach/verify/CoachVerifyPwRequestDto';

export const usePostVerifyPw = () => {
  return useMutation<CoachVerifyPwResponseDto, AxiosError, CoachVerifyPwRequestDto>({
    mutationFn: CoachApi.postVerifyPw,
  });
};

export default usePostVerifyPw;
