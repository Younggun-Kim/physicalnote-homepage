import { UndefinedInitialDataOptions, useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import AddressHierarchyResponseDto from '@/networks/dto/common/addressHierarchyResponse';

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

export const getSidoOpt = {
  queryKey: ['getSido'],
  queryFn: getSiDo,
} as UndefinedInitialDataOptions<AddressHierarchyResponseDto[], Error, AddressHierarchyResponseDto[], string[]>;

export const useGetSiDo = (): ResponseType => {
  return useQuery({ ...getSidoOpt });
};

export default useGetSiDo;
