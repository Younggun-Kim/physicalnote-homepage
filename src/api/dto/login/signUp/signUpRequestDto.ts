import { AgeEnum, EntrySourceEnum, StaffPositionEnum, TeamSizeEnum } from '@/types';

/**
 * 회원가입 요청 DTO
 * */
export default interface SignUpRequestDto {
  name: string;
  birthDate: string;
  loginId: string;
  cellphoneNo: string;
  password: string;
  sido: string;
  sgg: string;
  dong: string;
  gender: string;
  entrySource: EntrySourceEnum;
  position: StaffPositionEnum;
  teamAgeGroup: AgeEnum;
  teamName: string;
  teamSize: TeamSizeEnum;
  teamProfile: string;
}
