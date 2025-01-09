export type PlanType = 'MONTHLY' | 'YEARLY';

export const isPlanType = (type: any): type is PlanType => {
  return type === 'MONTHLY' || type === 'YEARLY';
};

export const getPlanTypeName = (type: PlanType) => {
  switch (type) {
    case 'MONTHLY':
      return 'Monthly';
    case 'YEARLY':
      return 'Yearly';
    default:
      return '';
  }
};

export const isPlanTypeMonthly = (type: PlanType) => type == 'MONTHLY';
