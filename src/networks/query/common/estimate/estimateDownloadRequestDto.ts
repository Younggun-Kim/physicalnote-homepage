export default interface EstimateDownloadRequestDto {
  companyName: string;
  isMonthly: 'YES' | 'NO';
  planId: number;
}
