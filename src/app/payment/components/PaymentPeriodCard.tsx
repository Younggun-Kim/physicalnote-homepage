import Image from 'next/image';
import { getPlanTypeName, isPlanTypeMonthly, PlanType } from '@/types/planType';

interface Props {
  type: PlanType;
  price: number;
  originPrice: number;
}

/**
 * type: PlanType
 * price: 만원 단위
 * */
const PaymentPeriodCard = ({ type, price, originPrice }: Props) => {
  const isYearly = !isPlanTypeMonthly(type);
  return (
    <div
      className={['w-full min-h-[119px] rounded-[20px] bg-white shadow-md px-4 py-1', 'flex items-center gap-7'].join(
        ' ',
      )}
    >
      <span className={'flex-1 font-poetsen font-normal text-primary text-xl text-center'}>
        {getPlanTypeName(type)}
      </span>
      <div className="flex-[2] flex flex-col ">
        {isYearly && (
          <div className={'relative'}>
            <Image
              className={'absolute -left-1'}
              src={'/icons/discount.svg'}
              alt={'할인금액'}
              width={76}
              height={20}
            />
            <span className={'min-w-[76px] inline-block font-sans text-primary text-sm text-center'}>
              {originPrice}만원
            </span>
          </div>
        )}
        <div className="flex items-center gap-2.5">
          <span className={['font-sans font-bold text-gray1 text-xl'].join(' ')}>{price}만원</span>
          <span className={['font-sans font-medium text-gray1 text-xs'].join(' ')}>/ 월</span>
        </div>
        {isYearly && (
          <p className={['font-sans font-bold text-gray1 text-2xs mt-2.5'].join(' ')}>
            1년 단위 계약시 10% 할인됩니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPeriodCard;
