'use client';

import { useEffect, useState } from 'react';
import { useBillingKeyStore, useProfileEditStore } from '@/store';
import { useSearchParams } from 'next/dist/client/components/navigation';
import PaymentTeamInfo from '@/app/payment/components/PaymentTeamInfo';
import PaymentPrice from '@/app/payment/components/PaymentPrice';
import PaymentInfo from '@/app/payment/components/PaymentInfo';
import CardView from '@/app/mypage/subscribe/components/card/CardView';
import PaymentBtnGroup from '@/app/payment/components/PaymentBtnGroup';
import useGetBillingKeys from '@/networks/query/payment/useGetBillingKeys';
import PaymentDivider from '@/app/payment/components/PaymentDivider';
import useCoachInfoStore from '@/store/coachInfoStore';
import useGetCoachInfo from '@/networks/query/coach/useGetCoachInfo';
import useGetUserDetail from '@/networks/query/user/useGetUserDetail';
import usePlanStore from '@/store/plansStore';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';

export default function PaymentContent() {
  const searchParams = useSearchParams();

  const { plans } = usePlanStore((store) => store.state);

  const { data: userInfoData } = useGetUserDetail();
  const { setStateFromDto } = useProfileEditStore((store) => store.actions);

  const { data: coachInfoData } = useGetCoachInfo();
  const { onSet: setCoachInfo } = useCoachInfoStore((store) => store.actions);

  const { data: billingKeysData } = useGetBillingKeys();
  const { setBillingKey } = useBillingKeyStore((store) => store.actions);
  const [plan, setPlan] = useState<PlanResponseDto | undefined>();

  useEffect(() => {
    if (billingKeysData == undefined) return;
    setBillingKey(billingKeysData);
  }, [billingKeysData]);

  useEffect(() => {
    if (coachInfoData == undefined) return;
    setCoachInfo(coachInfoData);
  }, [coachInfoData]);

  useEffect(() => {
    if (userInfoData == undefined) return;
    setStateFromDto(userInfoData);
  }, [userInfoData]);

  useEffect(() => {
    const planId = searchParams.get('planId');
    const findPlan = plans.find((plan) => plan.id == parseInt(planId ?? ''));
    setPlan(findPlan);
  }, [searchParams]);

  return (
    <div className={'w-full max-w-[800px] flex flex-col justify-start items-start py-10 px-7.5 mx-auto sm:mt-12'}>
      <span className={'font-sans font-bold text-black text-base sm:text-xl'}>플랜정보</span>
      <PaymentTeamInfo />
      <PaymentPrice plan={plan} />
      <PaymentDivider />
      <span className={'font-sans font-bold text-black text-base sm:text-xl'}>정보</span>
      <PaymentInfo />
      <PaymentDivider />
      <div className="w-full flex justify-center">
        <CardView alignCenter={true} />
      </div>
      <PaymentBtnGroup plan={plan} />
    </div>
  );
}
