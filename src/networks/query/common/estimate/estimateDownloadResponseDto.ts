export default interface EstimateDownloadResponseDto {
  description: string;
  filename: string;
  inputStream: any; // InputStream 타입은 프론트엔드에서는 File 또는 Blob으로 처리
  open: boolean;
  readable: boolean;
  uri: string;
  url: string;
}
