export type PlanType = 'MONTHLY' | 'YEARLY';
export const isPlanType = (type: any): type is PlanType => {
  return type === 'MONTHLY' || type === 'YEARLY';
};
