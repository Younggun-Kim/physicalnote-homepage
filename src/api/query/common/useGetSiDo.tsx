import AddressHierarchyResponseDto from '@/api/dto/common/addressHierarchyResponse';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import CommonApi from '@/api/common';

type ResponseType = UseQueryResult<AddressHierarchyResponseDto[]>;
export const useGetSiDo = (): ResponseType => {
  return useQuery({
    queryKey: ['siDo'],
    queryFn: async () => {
      const result = await CommonApi.getSiDo();
      return result.data;
    },
  });
};

export default useGetSiDo;
