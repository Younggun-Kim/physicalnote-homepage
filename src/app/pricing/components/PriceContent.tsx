'use client';

import PriceContentTitle from './PriceContentTitle';
import PriceContentDescription from './PriceContentDescription';
import PriceContentCards from './PriceContentCards';
import PriceContentFaq from '@/app/pricing/components/PriceContentFaq';
import { useMediaQuery } from 'usehooks-ts';

export default function PriceContent() {
  const isMobile = useMediaQuery('(max-width: 425px)');

  return (
    <div
      className={[
        'w-full flex flex-col justify-start items-start gap-5 pb-10',
        'sm:items-center',
        'md:items-start md:pt-20 md:pl-0',
        'lg:flex-row lg:justify-between lg:items-center lg:pt-[120px] lg:px-[50px] lg:pb-[111px]',
        'xl:justify-start',
        '2xl:max-w-[2560px] 2xl:pt-[120px] 2xl:gap-[120px]',
      ].join(' ')}
    >
      <div className="h-full flex flex-col gap-7.5 xl:gap-15">
        <PriceContentTitle />
        <PriceContentDescription />
      </div>
      <div>
        <PriceContentCards />
        {!isMobile && <PriceContentFaq />}
      </div>
    </div>
  );
}
