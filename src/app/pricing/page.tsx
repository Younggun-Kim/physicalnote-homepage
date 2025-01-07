import PriceContent from '@/app/pricing/components/PriceContent';
import PriceContentRefund from '@/app/pricing/components/PriceContentRefund';
import PriceBtnGroup from '@/app/pricing/components/PriceBtnGroup';

export default async function PricingPage() {
  return (
    <div
      className={[
        'flex flex-col justify-start items-start',
        'pt-15 px-7.5 pb-8',
        'md:px-20 md:pb-10',
        'lg:pt-35 lg:px-12',
        'max-w-[1600px] 2xl:mx-auto 2xl:px-0',
      ].join(' ')}
    >
      <PriceContent />

      <PriceBtnGroup />
      <div className="h-[1px] w-full bg-secondary my-10"></div>
      <PriceContentRefund />
    </div>
  );
}
