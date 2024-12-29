import { PlanType } from '@/types/planType';

export default interface SubscriptionRequestDto {
  billingCycle: PlanType;
  customerKey: string;
  planId: number;
}
