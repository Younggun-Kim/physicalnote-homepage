import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/app/networks/axiosInstance';
import { CoachInfoResponseDto } from '@/app/api/coach/route';

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
