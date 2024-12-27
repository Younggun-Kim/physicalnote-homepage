import PriceContent from './components/PriceContent';
import PriceContentRefund from './components/PriceContentRefund';

export default function PricingPage() {
  return (
    <div
      className={[
        'flex flex-col justify-start items-center',
        'pt-[60px] px-[30px] pb-[32px]',
        'xs:pt-[47px] xs:px-[60px] xs:pb-[20px]',
        'sm:pt-[80px] sm:px-[75px] sm:pb-[20px]',
      ].join(' ')}
    >
      <PriceContent />
      <div className="h-[1px] w-full max-w-[1587px] bg-secondary"></div>
      <PriceContentRefund />
    </div>
  );
}
