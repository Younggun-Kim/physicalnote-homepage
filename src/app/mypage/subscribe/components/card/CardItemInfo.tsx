import GetBillingKeysResponseDto from '@/api/dto/payment/GetBillingKeysResponseDto';

interface Props {
  billingKey: GetBillingKeysResponseDto;
}

export default function CardItemInfo({ billingKey }: Props) {
  return (
    <div className="w-full flex flex-col">
      <span
        className={
          'font-sans font-medium text-gray1 text-[0.625rem] leading-relaxed tracking-tighter mb-2.5 xs:text-xs'
        }
      >
        신용/체크카드
      </span>
      <span className={'font-sans font-bold text-gray1 text-sm whitespace-nowrap tracking-tighter sm:text-base'}>
        {billingKey?.issuerName ?? ''} {billingKey?.formattedCardNumber ?? ''}
      </span>
      <span className={'font-sans font-normal text-gray1 text-xs leading-relaxed tracking-tighter'}>
        등록일 : {billingKey?.createdDate}
      </span>
    </div>
  );
}
