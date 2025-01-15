import PaymentBackBtn from '@/app/payment/components/PaymentBackBtn';
import PaymentNextBtn from '@/app/payment/components/PaymentNextBtn';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';
import { PlanType } from '@/types/planType';
import { EmailValue } from '@/data';

interface Props {
  plan?: PlanResponseDto;
  planType?: PlanType;
  email: EmailValue;
}

export default function PaymentBtnGroup({ plan, planType, email }: Props) {
  return (
    <div className={'w-full flex justify-center items-center gap-5 mt-20'}>
      <PaymentBackBtn />
      <PaymentNextBtn
        planType={planType}
        planId={plan?.id}
        email={email}
      />
    </div>
  );
}
