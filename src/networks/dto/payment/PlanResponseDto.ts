export default interface PlanResponseDto {
  description: string;
  id: number;
  monthlyDiscountAmount: number;
  monthlyDiscountedPrice: number;
  monthlyPrice: number;
  name: string;
  yearlyDiscountAmount: number;
  yearlyDiscountedPrice: number;
  yearlyPrice: number;
  features: string[];
}
