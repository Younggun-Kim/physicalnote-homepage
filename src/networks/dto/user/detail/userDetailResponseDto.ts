/**
 * 유저 조회 DTO
 * */
export default interface UserDetailResponseDto {
  birthDate: string;
  cellPhone: string;
  gender: string;
  id: number;
  joinDate: string;
  loginId: string;
  memberCnt: number;
  name: string;
  profile: string;
  teamId: number;
  teamName: string;
  teamRequestYn: boolean;
}
