import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';
import PaymentField from '@/app/payment/components/PaymentField';

interface Props {
  plan?: PlanResponseDto;
}

export default function PaymentPrice({ plan }: Props) {
  return (
    <div className={'flex justify-start items-center gap-[58px]'}>
      <PaymentField>결제금액</PaymentField>
      <div>
        <span
          className={'font-sans font-normal text-gray1 text-2xl leading-relaxed tracking-tighter sm:text-[2.25rem]'}
        >
          {(plan?.monthlyDiscountedPrice ?? 0) / 10000}만원
        </span>
        <span className={'font-sans font-medium text-gray1 text-base'}> / 월</span>
      </div>
    </div>
  );
}
