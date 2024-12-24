import { useQuery } from '@tanstack/react-query';
import CommonApi from '@/api/common';

export const useGetEmd = (sggCode: string) => {
  return useQuery({
    queryKey: ['emd', sggCode],
    enabled: sggCode !== '',
    queryFn: async () => {
      const result = await CommonApi.getEmd(sggCode);
      return result.data;
    },
  });
};

export default useGetEmd;
