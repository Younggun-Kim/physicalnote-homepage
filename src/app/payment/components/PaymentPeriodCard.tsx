import { getPlanTypeName, isPlanTypeMonthly, PlanType } from '@/types/planType';
import DiscountIcon from '@/app/payment/components/DiscountIcon';

interface Props {
  type: PlanType;
  price: number;
  originPrice: number;
  isSelected: boolean;
  onClick: () => void;
}

/**
 * type: PlanType
 * price: 만원 단위
 * */
const PaymentPeriodCard = ({ type, price, originPrice, isSelected, onClick }: Props) => {
  const isYearly = !isPlanTypeMonthly(type);
  const unit = isYearly ? '년' : '월';
  return (
    <div
      className={[
        'w-full min-h-[119px] rounded-[20px] shadow-md px-4 py-1',
        'flex items-center gap-7 hover:cursor-pointer',
        isSelected ? 'bg-primary' : 'bg-white',
      ].join(' ')}
      onClick={onClick}
    >
      <span
        className={[
          'flex-1 font-poetsen font-normal text-primary text-xl text-center',
          isSelected ? 'text-white' : 'text-primary',
        ].join(' ')}
      >
        {getPlanTypeName(type)}
      </span>
      <div className="flex-[2] flex flex-col md:flex-1">
        {isYearly && (
          <div className={'relative'}>
            <div className={'absolute top-1 -left-1 w-[76px] h-[20px] md:w-[95px] md:h-29px'}>
              <DiscountIcon color={isSelected ? '#ffffff' : '#8DBE3D'} />
            </div>
            <span
              className={[
                'min-w-[76px] inline-block font-sans text-primary text-sm text-center md:min-w-[95px] md:text-xl',
                isSelected ? 'text-white' : 'text-primary',
              ].join(' ')}
            >
              {originPrice}만원
            </span>
          </div>
        )}
        <div className="flex items-center gap-2.5">
          <span
            className={['font-sans font-bold text-xl', 'md:text-2xl', isSelected ? 'text-white' : 'text-gray1'].join(
              ' ',
            )}
          >
            {price}만원
          </span>
          <span className={['font-sans font-medium text-xs', isSelected ? 'text-white' : 'text-gray1'].join(' ')}>
            / {unit}
          </span>
        </div>
        {isYearly && (
          <p className={['font-sans font-bold text-2xs mt-2.5', isSelected ? 'text-white' : 'text-gray1'].join(' ')}>
            1년 단위 계약시 10% 할인됩니다.
            <br />
            최대 12개월 이내 서비스 구독 가능
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPeriodCard;
