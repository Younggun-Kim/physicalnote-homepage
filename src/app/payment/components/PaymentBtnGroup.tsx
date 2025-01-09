import PaymentBackBtn from '@/app/payment/components/PaymentBackBtn';
import PaymentNextBtn from '@/app/payment/components/PaymentNextBtn';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';
import { PlanType } from '@/types/planType';

interface Props {
  plan?: PlanResponseDto;
  planType?: PlanType;
}

export default function PaymentBtnGroup({ plan, planType }: Props) {
  return (
    <div className={'w-full flex justify-center items-center gap-5 mt-8'}>
      <PaymentBackBtn />
      <PaymentNextBtn
        planType={planType}
        planId={plan?.id}
      />
    </div>
  );
}
