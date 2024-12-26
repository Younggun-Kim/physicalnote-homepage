import { useQuery, UseQueryResult } from '@tanstack/react-query';
import CoachInfoResponseDto from '@/api/dto/coach/info/CoachInfoResponseDto';
import { AxiosInstance } from '@/app/utils/service/axiosInstance';

type ResponseType = UseQueryResult<CoachInfoResponseDto>;

export const getCoachInfo = async () => {
  try {
    const url = `admin/coach/info`;
    const result = await AxiosInstance.get<CoachInfoResponseDto>(url);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const useGetCoachInfo = (): ResponseType => {
  return useQuery({
    queryKey: ['getCoachInfo'],
    queryFn: getCoachInfo,
  });
};

export default useGetCoachInfo;
