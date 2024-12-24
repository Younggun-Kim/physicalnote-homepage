import RecentPaymentDto from '@/api/dto/payment/status/RecentPaymentDto';

/**
 * 구독 상태 조회
 */
export default interface GetStatusResponseDto {
  active: 'YES' | 'NO';
  amount: number;
  billingCycle: 'MONTHLY' | 'YEARLY';
  endDate: string;
  id: number;
  nextBillingDate: Date | undefined;
  planId: number;
  planName: string;
  recentPayments: RecentPaymentDto[];
  startDate: string;
}
