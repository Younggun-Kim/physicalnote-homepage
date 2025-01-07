import PriceContentTitle from './PriceContentTitle';
import PriceContentDescription from './PriceContentDescription';
import PlansContent from '@/app/mypage/subscribe/plans/components/PlansContent';

export default function PriceContent() {
  return (
    <div
      className={[
        'w-full flex flex-col justify-start items-start gap-17.5',
        'lg:max-w-[1024px] lg:items-start lg:mx-auto',
        '2xl:flex-row 2xl:mx-0 2xl:max-w-[1600px]',
      ].join(' ')}
    >
      <div
        className={[
          'h-full flex flex-col gap-10',
          'lg:flex-row lg:gap-28',
          '2xl:flex-col 2xl:justify-between 2xl:gap-10',
        ].join(' ')}
      >
        <PriceContentTitle />
        <PriceContentDescription />
      </div>
      <PlansContent />
    </div>
  );
}
