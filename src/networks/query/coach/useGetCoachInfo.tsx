import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import { CoachInfoResponseDto } from '@/app/api/coach/route';
import { hasTokenInCookies } from '@/utils/cookieUtils';

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
    enabled: hasTokenInCookies(),
    queryKey: ['getCoachInfo'],
    queryFn: getCoachInfo,
  });
};

export default useGetCoachInfo;
