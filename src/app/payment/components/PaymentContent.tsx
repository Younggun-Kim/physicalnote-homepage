'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/dist/client/components/navigation';
import PaymentInfo from '@/app/payment/components/PaymentInfo';
import CardView from '@/app/mypage/subscribe/components/card/CardView';
import PaymentBtnGroup from '@/app/payment/components/PaymentBtnGroup';
import PaymentDivider from '@/app/payment/components/PaymentDivider';
import usePlanStore from '@/store/plansStore';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';
import PaymentPeriodCard from '@/app/payment/components/PaymentPeriodCard';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import PaymentField from '@/app/payment/components/PaymentField';
import { isPlanTypeMonthly, PlanType } from '@/types/planType';
import PaymentEmail from '@/app/payment/components/PaymentEmail';
import { EmailValue } from '@/data';

export default function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { plans } = usePlanStore((store) => store.state);
  const [plan, setPlan] = useState<PlanResponseDto | undefined>();
  const [planType, setPlanType] = useState<PlanType>('MONTHLY');
  const [receiptEmail, setReceiptEmail] = useState<EmailValue>(EmailValue.empty);

  useEffect(() => {
    const planId = searchParams.get('planId');
    const findPlan = plans.find((plan) => plan.id == parseInt(planId ?? ''));
    if (!findPlan) {
      toast.error('유효하지 않은 구독 플랜입니다.');
      router.back();
      return;
    }
    setPlan(findPlan);
  }, [searchParams]);

  return (
    <div className={'w-full max-w-[800px] flex flex-col justify-start items-start py-10 px-7.5 mx-auto sm:mt-12'}>
      <div className={['w-full flex flex-col gap-5 md:flex-row md:gap-6', 'mb-12'].join(' ')}>
        <PaymentPeriodCard
          type={'MONTHLY'}
          price={(plan?.monthlyDiscountedPrice ?? 0) / 10000}
          originPrice={(plan?.monthlyDiscountedPrice ?? 0) / 10000}
          isSelected={isPlanTypeMonthly(planType)}
          onClick={() => setPlanType('MONTHLY')}
        />
        <PaymentPeriodCard
          type={'YEARLY'}
          price={(plan?.yearlyDiscountedPrice ?? 0) / 10000}
          originPrice={(plan?.yearlyPrice ?? 0) / 10000}
          isSelected={!isPlanTypeMonthly(planType)}
          onClick={() => setPlanType('YEARLY')}
        />
      </div>

      <div>
        <PaymentField className="inline-block min-w-20">구독정보</PaymentField>
        <div className={'inline-flex flex-col justify-center items-start group-hover:scale-90'}>
          {plan?.features.map((item, idx) => (
            <span
              key={idx}
              className={['font-sans font-normal text-black text-base leading-relaxed tracking-tighter'].join(' ')}
            >
              {idx > 1 ? '+ ' : ''}
              {item}
            </span>
          ))}
        </div>
        <div className={'flex flex-col justify-center items-start group-hover:scale-90'}></div>
      </div>
      <PaymentDivider />
      <span className={'font-sans font-bold text-gray1 text-base sm:text-lg'}>정보</span>
      <PaymentInfo />
      <PaymentDivider />
      <div className="w-full flex justify-center">
        <CardView alignCenter={true} />
      </div>
      <div className="mt-9 flex flex-col gap-5">
        <span className={'font-sans font-bold text-gray1 text-base sm:text-lg'}>영수증 받을 이메일(선택)</span>
        <PaymentEmail
          email={receiptEmail.getValue()}
          setEmail={(text: string) => setReceiptEmail(new EmailValue(text))}
        />
      </div>
      <PaymentBtnGroup
        plan={plan}
        planType={planType}
        email={receiptEmail}
      />
    </div>
  );
}
