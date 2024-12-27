import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { TeamValidateResponseDto } from '@/api/dto/common/teamValidateResponseDto';
import { TeamValidateRequestDto } from '@/api/dto/common/teamValidateRequestDto';
import { AxiosInstance } from '@/app/utils/service/axiosInstance';

/**
 * 팀 중복 확인 API
 */
export const getTeamValidate = async ({
  sidoCode,
  sggCode,
  dongCode,
  teamAgeGroup,
  teamName,
}: TeamValidateRequestDto) => {
  try {
    const url = `team/validate?sidoCode=${sidoCode}&sggCode=${sggCode}&dongCode=${dongCode}&teamAgeGroup=${teamAgeGroup.toUpperCase()}&teamName=${teamName}`;
    const result = await AxiosInstance.get<TeamValidateResponseDto>(url);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const useTeamValidate = () => {
  return useMutation<TeamValidateResponseDto, AxiosError, TeamValidateRequestDto>({
    mutationFn: getTeamValidate,
  });
};

export default useTeamValidate;
