export default interface RecentPaymentDto {
  amount: number;
  paymentDate: string;
  paymentKey: string;
  status:
    | 'BILLING_KEY_EXPIRED'
    | 'CANCELED'
    | 'DONE'
    | 'EXCEED_LIMIT'
    | 'EXPIRED'
    | 'FAILED'
    | 'INSUFFICIENT_BALANCE'
    | 'IN_PROGRESS'
    | 'VALIDATION_FAILED'
    | 'WAITING_FOR_PAYMENT';
}
