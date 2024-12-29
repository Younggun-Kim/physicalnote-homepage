/**
 * 회원가입 응답 DTO
 * */
export interface SignUpResponseDto {
  birthDate: string;
  loginId: string;
  name: string;
  status: boolean;
  message: string;
  token: string;
  userId: number;
}
