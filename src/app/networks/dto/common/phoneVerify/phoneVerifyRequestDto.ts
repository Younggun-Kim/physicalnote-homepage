/**
 * 인증번호 확인 요청 Dto
 */
export interface PhoneVerifyRequestDto {
  phoneNumber: string;
  authCode: string;
}

export default PhoneVerifyRequestDto;
