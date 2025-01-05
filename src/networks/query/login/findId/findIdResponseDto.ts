interface Account {
  email: string;
  type: 'APPLE' | 'IDPW' | 'NAVER' | 'KAKAO'; // 리터럴 타입으로 지정
}

export interface FindIdResponseDto {
  accounts: Account[];
  message: string;
  status: boolean;
  userLoginId: string;
}
