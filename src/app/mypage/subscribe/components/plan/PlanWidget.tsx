import PlanCategory from './PlanCategory';
import PlanPrice from '@/app/mypage/subscribe/components/plan/PlanPrice';
import useSubscriptionStore from '@/store/subscriptionStore';
import { formatYyyyMMddE } from '@/utils/dateUtils';

export default function PlanWidget() {
  const { subscription } = useSubscriptionStore((store) => store.state);
  return (
    <div
      className={[
        'w-full flex flex-col justify-start items-start gap-5 mt-8',
        'md:flex-row md:justify-between md:items-center',
      ].join(' ')}
    >
      <div className="flex flex-col justify-start items start gap-2">
        <span
          className={[
            'font-sans font-bold text-gray1 tracking-tighter whitespace-nowrap',
            'text-sm xs:text-base md:text-lg',
          ].join(' ')}
        >
          사용중인 구독요금
        </span>
        <span
          className={[
            'font-sans font-normal text-gray1 tracking-tighter whitespace-nowrap',
            'text-xs xs:text-sm sm:text-base md:text-lg',
          ].join(' ')}
        >
          다음 결제일 {formatYyyyMMddE(subscription?.nextBillingDate)}
        </span>
      </div>
      <div className={'w-full flex items-center justify-between gap-5 xs:justify-start md:justify-end'}>
        <PlanCategory />
        <PlanPrice />
      </div>
    </div>
  );
}
