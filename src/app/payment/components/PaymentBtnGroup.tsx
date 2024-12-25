import PaymentBackBtn from '@/app/payment/components/PaymentBackBtn';
import PaymentNextBtn from '@/app/payment/components/PaymentNextBtn';
import { PlanType } from '@/types/planType';

interface Props {
  planId?: number;
  billingCycle?: PlanType;
}

export default function PaymentBtnGroup({ planId, billingCycle }: Props) {
  return (
    <div className={'w-full flex justify-center items-center gap-5 mt-8'}>
      <PaymentBackBtn />
      <PaymentNextBtn
        billingCycle={billingCycle}
        planId={planId}
      />
    </div>
  );
}
