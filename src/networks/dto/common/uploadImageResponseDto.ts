/**
 * 이미지 업로드 응답 모델
 * */
export default interface UploadImageResponseDto {
  uploaded: boolean;
  url: string[];
}
