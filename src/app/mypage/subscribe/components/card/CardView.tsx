'use client';
import CardItem from '@/app/mypage/subscribe/components/card/CardItem';
import { useBillingKeyStore } from '@/store';
import CardAddBtn from '@/app/mypage/subscribe/components/card/CardAddBtn';

interface Props {
  alignCenter: boolean;
}

export default function CardView({ alignCenter }: Props) {
  const { billingKey } = useBillingKeyStore((store) => store.state);
  return (
    <div className={`w-full flex flex-col justify-start gap-5 ${alignCenter ? 'items-center' : 'items-start'}`}>
      <div className="w-full flex justify-between items-center gap-5">
        <span
          className={[
            'font-sans font-bold text-gray1 tracking-tighter text-center',
            'text-sm xs:text-base md:text-lg',
          ].join(' ')}
        >
          결제수단
        </span>
        <CardAddBtn />
      </div>
      {billingKey.map((data) => (
        <CardItem
          key={data.customerKey}
          billingKey={data}
        />
      ))}
    </div>
  );
}
