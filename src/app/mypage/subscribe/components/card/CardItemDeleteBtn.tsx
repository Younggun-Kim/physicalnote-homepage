'use client';

import useDeleteBillingKey from '@/networks/query/payment/useDeleteBillingKey';
import GetBillingKeysResponseDto from '@/networks/dto/payment/GetBillingKeysResponseDto';

interface Props {
  billingKey: GetBillingKeysResponseDto;
}

export default function CardItemDeleteBtn({ billingKey }: Props) {
  const deleteMutation = useDeleteBillingKey();
  const handleClick = async () => {
    if (!confirm('등록하신 카드를 삭제하시겠습니까?')) return;
    try {
      if (!billingKey) return;
      await deleteMutation.mutateAsync(billingKey.customerKey);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      className="text-gray1 font-notokr text-xs font-normal leading-relaxed tracking-tight underline underline-offset-auto whitespace-nowrap"
      onClick={handleClick}
    >
      삭제하기
    </button>
  );
}
