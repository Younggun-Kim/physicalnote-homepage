'use client';

import { toast } from 'react-toastify';
import { useAppStore, useBillingKeyStore } from '@/store';
import { PlanType } from '@/types/planType';
import usePostSubscription from '@/networks/query/usePostSubscription';
import { useRouter } from 'next/navigation';
import { EmailValue } from '@/data';
import usePutCoachEmail from '@/networks/query/coach/putEmail/usePutCoachEmail';

interface Props {
  planId?: number;
  planType?: PlanType;
  email?: EmailValue;
}

export default function PaymentNextBtn({ planId, planType, email }: Props) {
  const router = useRouter();
  const { userInfo } = useAppStore((store) => store.state);
  const { defaultBillingKey } = useBillingKeyStore((store) => store.state);
  const putEmail = usePutCoachEmail();
  const postMutation = usePostSubscription();

  const handleClick = async () => {
    if (!planId || planId == 0 || !planType) {
      toast('구독 플랜이 유효하지 않습니다. 관리자에게 문의해주세요.');
      return;
    }

    if (!defaultBillingKey) {
      toast('결제수단을 설정해주세요.');
      return;
    }

    let receiptEmail = email;
    if (!receiptEmail || receiptEmail.isEmpty()) {
      receiptEmail = new EmailValue(userInfo?.loginId);
    }

    if (!receiptEmail.isValid()) {
      toast('이메일을 확인해주세요.');
      return;
    }

    const emailResponse = await putEmail.mutateAsync({
      email: receiptEmail.getValue(),
    });

    if (!emailResponse.state) {
      toast(emailResponse.message);
      return;
    }

    const response = await postMutation.mutateAsync({
      billingCycle: planType,
      customerKey: defaultBillingKey.customerKey,
      planId,
    });

    if (response.data) {
      router.push('/payment/success');
    }
  };

  return (
    <button
      className="rounded-full font-sans font-bold text-gray1 text-xs leading-relaxed py-2.5 px-5 whitespace-nowrap bg-secondary flex-1 sm:max-w-[320px]"
      onClick={handleClick}
    >
      결제하기
    </button>
  );
}
