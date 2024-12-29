/**
 * 인증번호 확인 응답 Dto
 */
export interface PhoneVerifyResponseDto {
  existingUser: boolean;
  maskedLoginId: string;
  message: string;
  valid: boolean;
}

export default PhoneVerifyResponseDto;
