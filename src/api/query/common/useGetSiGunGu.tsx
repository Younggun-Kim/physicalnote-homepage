import { useQuery } from '@tanstack/react-query';
import CommonApi from '@/api/common';

export const useGetSiGunGu = (siDoCode: string) => {
  return useQuery({
    queryKey: ['siGunGu', siDoCode],
    enabled: siDoCode !== '',
    queryFn: async () => {
      const result = await CommonApi.getSiGunGu(siDoCode);
      return result.data;
    },
  });
};

export default useGetSiGunGu;
