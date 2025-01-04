import { useMutation } from '@tanstack/react-query';
import { AxiosInstance } from '@/networks/axiosInstance';
import TokenResponseDto from '@/networks/dto/tokenResponseDto';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';
import { hasTokenInCookies } from '@/utils/cookieUtils';

/**
 * 리로그인 API
 */
export const postReLogin = async () => {
  try {
    const url = `admin/relogin`;
    const result = await AxiosInstance.post<TokenResponseDto>(url);
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postReloginOption = {
  enabled: hasTokenInCookies(),
  mutationFn: postReLogin,
};

export const useReLogin = () => {
  return useMutation<TokenResponseDto, ErrorResponseType>(postReloginOption);
};

export default useReLogin;
