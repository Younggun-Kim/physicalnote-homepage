import CardItemDeleteBtn from './CardItemDeleteBtn';
import CardItemChangeBtn from './CardItemChangeBtn';
import GetBillingKeysResponseDto from '@/api/dto/payment/GetBillingKeysResponseDto';

interface Props {
  billingKey: GetBillingKeysResponseDto;
}

export default function CardItemBtnGroup({ billingKey }: Props) {
  return (
    <div className="w-full flex justify-start items-center gap-[30px] md:justify-end">
      <CardItemDeleteBtn billingKey={billingKey} />
      <CardItemChangeBtn billingKey={billingKey} />
    </div>
  );
}
