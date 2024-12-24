import { useMutation } from '@tanstack/react-query';
import CoachApi from '@/api/coach';
import { AxiosError, AxiosResponse } from 'axios';
import CoachPutRequestDto from '@/api/dto/coach/put/CoachPutRequestDto';
import CoachInfoResponseDto from '@/api/dto/coach/info/CoachInfoResponseDto';

type ResponseType = AxiosResponse<CoachInfoResponseDto, any>;
export const usePutCoachInfo = () => {
  return useMutation<ResponseType, AxiosError, CoachPutRequestDto>({
    mutationFn: CoachApi.putCoachInfo,
  });
};

export default usePutCoachInfo;
