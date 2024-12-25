'use client';
import useSubscriptionCancelModalStore from '@/store/modal/subscriptionCancelModalStore';

export default function PriceUnSubscribeBtn() {
  const { openModal } = useSubscriptionCancelModalStore((store) => store.actions);

  const handleClick = async () => {
    openModal();
  };

  return (
    <button
      className="text-red font-sans text-xs font-normal leading-relaxed tracking-tighter underline decoration-solid decoration-auto underline-offset-auto from-font whitespace-nowrap"
      onClick={handleClick}
    >
      구독해지
    </button>
  );
}
