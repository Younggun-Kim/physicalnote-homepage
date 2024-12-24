/**
 * 로그인 응답 Dto
 */
export interface LoginResponseDto {
  token: string;
  userId: number;
  loginId: string;
  name: string;
  role: string;
  birthDate?: string;
}
