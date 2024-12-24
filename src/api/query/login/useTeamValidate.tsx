import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import LoginApi from '@/api/login';
import { TeamValidateResponseDto } from '@/api/dto/common/teamValidateResponseDto';
import { TeamValidateRequestDto } from '@/api/dto/common/teamValidateRequestDto';

export const useTeamValidate = () => {
  return useMutation<TeamValidateResponseDto, AxiosError, TeamValidateRequestDto>({
    mutationFn: LoginApi.getTeamValidate,
  });
};

export default useTeamValidate;
