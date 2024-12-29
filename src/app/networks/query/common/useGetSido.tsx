import AddressHierarchyResponseDto from '@/api/dto/common/addressHierarchyResponse';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/app/networks/axiosInstance';

/**
 * 시/도 목록 조회
 */
export const getSiDo = async () => {
  try {
    const url = `sido`;
    const response = await AxiosInstance.get<AddressHierarchyResponseDto[]>(url);

    return response.data ?? [];
  } catch (err) {
    return Promise.reject(err);
  }
};

type ResponseType = UseQueryResult<AddressHierarchyResponseDto[]>;

export const useGetSiDo = (): ResponseType => {
  return useQuery({
    queryKey: ['getSido'],
    queryFn: getSiDo,
  });
};

export default useGetSiDo;
