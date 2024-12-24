import { useQuery, UseQueryResult } from '@tanstack/react-query';
import CoachApi from '@/api/coach';
import CoachInfoResponseDto from '@/api/dto/coach/info/CoachInfoResponseDto';

type ResponseType = UseQueryResult<CoachInfoResponseDto>;
export const useGetCoachInfo = (): ResponseType => {
  return useQuery({
    queryKey: ['coachInfo'],
    queryFn: async () => {
      return await CoachApi.getCoachInfo();
    },
  });
};

export default useGetCoachInfo;
