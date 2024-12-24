import RefundResponse from './RefundResponseDto';

export default interface RefundResultDto {
  cancellationFee: number;
  message: string;
  refundAmount: number;
  refundResponse: RefundResponse;
  subscriptionId: number;
  userId: number;
}
