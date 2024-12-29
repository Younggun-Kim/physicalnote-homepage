import { AgeEnum, StaffPositionEnum, TeamSizeEnum } from '@/types';

/**
 * 회원가입 요청 DTO
 * */
export default interface CoachPutRequestDto {
  si: string;
  gu: string;
  dong: string;
  staffPosition: StaffPositionEnum;
  teamAgeGroup: AgeEnum;
  teamName: string;
  teamProfile: string;
  teamSize: TeamSizeEnum;
}
