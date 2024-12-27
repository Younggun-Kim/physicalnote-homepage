import PlanCategory from './PlanCategory';
import PlanPrice from '@/app/mypage/subscribe/components/plan/PlanPrice';
import useSubscriptionStore from '@/store/subscriptionStore';
import { formatYyyyMMddE } from '@/utils/dateUtils';
import Image from 'next/image';
import Link from 'next/link';

export default function PlanWidget() {
  const { subscription } = useSubscriptionStore((store) => store.state);

  const isSubscription = subscription != undefined;
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
            'text-xs xs:text-sm sm:text-base',
          ].join(' ')}
        >
          {isSubscription ? `다음 결제일 ${formatYyyyMMddE(subscription?.nextBillingDate)}` : '구독 내역이 없습니다.'}
        </span>
      </div>
      <div className={'w-full flex items-center justify-between gap-5 xs:justify-start md:justify-end'}>
        {isSubscription && <PlanCategory />}
        {isSubscription && <PlanPrice />}
        {!isSubscription && (
          <Link
            href={`/mypage/subscribe/plans`}
            className={[
              'flex justify-center items-center bg-secondary rounded-full gap-1.5',
              'font-sans font-bold text-gray1 tracking-tighter px-[26px] py-[9px]',
              'text-sm',
            ].join(' ')}
          >
            구독하기
            <Image
              className={'sm:w-6 sm:h-6'}
              src={'/icons/arrow-right.svg'}
              alt=""
              width={20}
              height={20}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
