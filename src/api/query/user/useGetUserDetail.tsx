import { useQuery } from '@tanstack/react-query';
import UserApi from '@/api/user';

interface Props {
  enabled?: boolean;
}

export const useGetUserDetail = ({ enabled }: Props) => {
  return useQuery({
    queryKey: [],
    enabled: enabled,
    queryFn: async () => {
      return await UserApi.getUser();
    },
  });
};

export default useGetUserDetail;
