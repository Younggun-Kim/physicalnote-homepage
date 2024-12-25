// tokenStorage.ts
export const tokenStorage = {
  getToken: (): string => {
    return localStorage.getItem('accessToken') ?? '';
  },

  setToken: (token: string): void => {
    localStorage.setItem('accessToken', token);
  },

  removeToken: (): void => {
    localStorage.removeItem('accessToken');
  },

  // 토큰이 있는지 확인
  hasToken: (): boolean => {
    return !!localStorage.getItem('accessToken');
  },
};
