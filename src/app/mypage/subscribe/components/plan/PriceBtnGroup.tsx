import PriceUnSubscribeBtn from '@/app/mypage/subscribe/components/plan/PriceUnSubscribeBtn';
import PlanChangeBtn from '@/app/mypage/subscribe/components/plan/PriceChangeBtn';

export default function PriceBtnGroup() {
  return (
    <div className={'w-full flex justify-start items-center gap-8 mt-5 md:justify-end'}>
      <PriceUnSubscribeBtn />
      <PlanChangeBtn />
    </div>
  );
}
