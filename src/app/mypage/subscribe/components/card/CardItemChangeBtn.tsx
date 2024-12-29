'use client';
import usePutBillingKeysDefault from '@/app/networks/query/payment/usePutBillingKeysDefault';
import GetBillingKeysResponseDto from '@/app/networks/dto/payment/GetBillingKeysResponseDto';

interface Props {
  billingKey: GetBillingKeysResponseDto;
}

export default function CardItemChangeBtn({ billingKey }: Props) {
  // TODO: 수단 변경 테스트 필요
  const defaultMutation = usePutBillingKeysDefault();
  const handleClick = async () => {
    if (!confirm('결제 수단을 변경하시겠습니까?')) return;
    try {
      console.log(billingKey);
      await defaultMutation.mutateAsync(billingKey.customerKey);
    } catch (e) {}
  };

  return (
    <button
      className="rounded-full text-gray1 font-notokr text-xs font-bold leading-relaxed tracking-tight px-3 py-1 bg-secondary whitespace-nowrap"
      onClick={handleClick}
    >
      수단변경
    </button>
  );
}
