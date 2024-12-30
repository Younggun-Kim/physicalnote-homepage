import PaymentBackBtn from '@/app/payment/components/PaymentBackBtn';
import PaymentNextBtn from '@/app/payment/components/PaymentNextBtn';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';

interface Props {
  plan?: PlanResponseDto;
}

export default function PaymentBtnGroup({ plan }: Props) {
  return (
    <div className={'w-full flex justify-center items-center gap-5 mt-8'}>
      <PaymentBackBtn />
      <PaymentNextBtn
        billingCycle={'MONTHLY'}
        planId={plan?.id}
      />
    </div>
  );
}
