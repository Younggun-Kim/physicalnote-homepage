import { UndefinedInitialDataOptions, useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import { hasTokenInCookies } from '@/utils/cookieUtils';
import CoachInfoResponseDto from '@/networks/dto/coach/info/CoachInfoResponseDto';

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

export const getCoachInfoOpt = {
  enabled: await hasTokenInCookies(),
  queryKey: ['getCoachInfo'],
  queryFn: getCoachInfo,
} as UndefinedInitialDataOptions<CoachInfoResponseDto, Error, CoachInfoResponseDto, string[]>;

export const useGetCoachInfo = (): ResponseType => {
  return useQuery({
    ...getCoachInfoOpt,
  });
};

export default useGetCoachInfo;
