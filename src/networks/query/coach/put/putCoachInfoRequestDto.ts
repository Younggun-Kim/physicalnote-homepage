import { AgeEnum, StaffPositionEnum, TeamSizeEnum } from '@/types';

/**
 * 코치 정보 수정 요청 DTO
 * */
export default interface PutCoachInfoRequestDto {
  si: string;
  gu: string;
  dong: string;
  staffPosition: StaffPositionEnum;
  teamAgeGroup: AgeEnum;
  teamName: string;
  teamProfile: string;
  teamSize: TeamSizeEnum;
}
