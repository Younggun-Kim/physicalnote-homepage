import { getCookie } from 'cookies-next';

/** 토큰 저장 여부 */
export const hasTokenInCookies = (): boolean => {
  return (getCookie('token')?.toString().length ?? 0) > 0;
};
