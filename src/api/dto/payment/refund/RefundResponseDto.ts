export default interface RefundResponse {
  approvedAt: string;
  cancelAmount: number;
  cancelReason: string;
  mid: string;
  paymentKey: string;
  requestedAt: string;
  status: string;
  transactionKey: string;
  version: string;
}
