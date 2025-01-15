import CardItemInfo from './CardItemInfo';
import CardItemBtnGroup from '@/app/mypage/subscribe/components/card/CardItemBtnGroup';
import GetBillingKeysResponseDto from '@/networks/dto/payment/GetBillingKeysResponseDto';

interface Props {
  billingKey: GetBillingKeysResponseDto;
}

export default function CardItem({ billingKey }: Props) {
  const isDefault = billingKey.isDefault == 'YES';
  const border = isDefault ? 'border-primary border-[2px]' : 'border-secondary border-[0.5px]';
  return (
    <div
      className={[
        'rounded-[10px] p-6',
        border,
        'w-full flex flex-col gap-5',
        'sm:max-w-[400px]',
        'md:max-w-[500px] md:flex-row md:justify-between',
        'lg:max-w-[620px]',
      ].join(' ')}
    >
      <CardItemInfo billingKey={billingKey} />
      <CardItemBtnGroup billingKey={billingKey} />
    </div>
  );
}
