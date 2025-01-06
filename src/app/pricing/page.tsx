import PriceContent from '@/app/pricing/components/PriceContent';
import PriceContentRefund from '@/app/pricing/components/PriceContentRefund';

export default async function PricingPage() {
  return (
    <div
      className={[
        'flex flex-col justify-start items-center',
        'pt-[60px] px-[30px] pb-[32px]',
        'xs:pt-[47px] xs:px-[60px] xs:pb-[20px]',
        'sm:pt-[80px] sm:px-[75px] sm:pb-[20px]',
        'max-w-[2560px] 2xl:mx-auto 2xl:pl-[400px] 2xl:pr-25',
      ].join(' ')}
    >
      <PriceContent />
      <div className="h-[1px] w-full bg-secondary"></div>
      <PriceContentRefund />
    </div>
  );
}
