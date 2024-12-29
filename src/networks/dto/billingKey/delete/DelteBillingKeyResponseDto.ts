/**
 * 빌링키 삭제 응답 Dto
 */
export default interface DeleteBillingKeyResponseDto {
  id: number;
  deleted: boolean;
  message: string;
}
