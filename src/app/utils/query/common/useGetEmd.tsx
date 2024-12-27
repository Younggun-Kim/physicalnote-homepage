import AddressHierarchyResponseDto from '@/api/dto/common/addressHierarchyResponse';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/app/utils/service/axiosInstance';

/**
 * 읍/면/동 목록 조회
 */
export const getEmd = async (sggCode?: string) => {
  if (!sggCode) {
    return Promise.reject();
  }

  try {
    const url = `emd?sggCode=${sggCode}`;
    const response = await AxiosInstance.get<AddressHierarchyResponseDto[]>(url);

    return response.data ?? [];
  } catch (err) {
    return Promise.reject(err);
  }
};

type ResponseType = UseQueryResult<AddressHierarchyResponseDto[]>;

export const useGetEmd = (sggCode?: string): ResponseType => {
  return useQuery({
    enabled: sggCode != null,
    queryKey: ['getEmd'],
    queryFn: () => getEmd(sggCode),
  });
};

export default useGetEmd;
