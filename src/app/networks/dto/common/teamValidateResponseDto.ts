/**
 * 팀 검증 요청 DTO
 */
export interface TeamValidateResponseDto {
  dong: string;
  dongCode: string;
  message: string;
  sgg: string;
  sggCode: string;
  sido: string;
  sidoCode: string;
  teamId: number;
  teamName: string;
  valid: boolean;
}
