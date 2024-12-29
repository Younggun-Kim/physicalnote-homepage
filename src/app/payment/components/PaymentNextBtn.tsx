'use client';

import { toast } from 'react-toastify';
import { useBillingKeyStore } from '@/store';
import { PlanType } from '@/types/planType';
import usePostSubscription from '@/app/networks/query/usePostSubscription';
import { useRouter } from 'next/navigation';

interface Props {
  planId?: number;
  billingCycle?: PlanType;
}

export default function PaymentNextBtn({ planId, billingCycle }: Props) {
  const router = useRouter();
  const { defaultBillingKey } = useBillingKeyStore((store) => store.state);
  const postMutation = usePostSubscription();

  const handleClick = async () => {
    if (!planId || planId == 0 || !billingCycle) {
      toast('구독 플랜이 유효하지 않습니다. 관리자에게 문의해주세요.');
      return;
    }

    if (!defaultBillingKey) {
      toast('결제수단을 설정해주세요.');
      return;
    }
    const response = await postMutation.mutateAsync({
      billingCycle,
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
