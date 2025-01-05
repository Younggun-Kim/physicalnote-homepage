import { hasCookie } from 'cookies-next';

/** 토큰 저장 여부 */
export const hasTokenInCookies = (): boolean | Promise<boolean> => {
  return hasCookie('token');
};
