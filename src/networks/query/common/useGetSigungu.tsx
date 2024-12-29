import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import AddressHierarchyResponseDto from '@/networks/dto/common/addressHierarchyResponse';

/**
 * 시/군/구 목록 조회
 */
export const getSigungu = async (siDoCode?: string) => {
  if (!siDoCode) {
    return Promise.reject();
  }

  try {
    const url = `sgg?sidoCode=${siDoCode}`;
    const response = await AxiosInstance.get<AddressHierarchyResponseDto[]>(url);

    console.log(response.data);
    return response.data ?? [];
  } catch (err) {
    return Promise.reject(err);
  }
};

type ResponseType = UseQueryResult<AddressHierarchyResponseDto[]>;

export const useGetSigungu = (sidoCode?: string): ResponseType => {
  return useQuery({
    enabled: sidoCode != null,
    queryKey: ['getSigungu', sidoCode],
    queryFn: () => getSigungu(sidoCode),
  });
};

export default useGetSigungu;
