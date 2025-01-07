import PriceContentRefundDescriptionFirst from '@/app/pricing/components/PriceContentRefundDescriptionFirst';
import PriceContentRefundDescriptionSecond from '@/app/pricing/components/PriceContentRefundDescriptionSecond';

export default function PriceContentRefund() {
  const titleStyle = ['font-sans font-bold text-gray1 text-sm mb-4.5', 'sm:text-2xl'].join(' ');
  return (
    <div
      className={[
        'w-full pt-10 flex flex-col justify-start items-start',
        'md:pt-20 md:w-auto mx-auto',
        'lg:w-full lg:flex-row lg:pt-20 lg:gap-20',
      ].join(' ')}
    >
      <h6
        className={[
          'font-sans font-bold text-base text-black mb-10',
          'md:text-[1.75rem] md:mb-8',
          'lg:text-[2rem]',
        ].join(' ')}
      >
        환불정책
      </h6>
      <div className="flex flex-col justify-start items-start">
        <span className={titleStyle}>제 19조 결제취소 & 환불</span>
        <PriceContentRefundDescriptionFirst />
        <div className="h-17 lg:h-15.5"></div>
        <span className={titleStyle}>제 3조 환불소요기간</span>
        <PriceContentRefundDescriptionSecond />
      </div>
    </div>
  );
}
