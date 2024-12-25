import { useRouter } from 'next/navigation';

export default function PaymentBackBtn() {
  const router = useRouter();
  const handleClick = async () => {
    router.back();
  };

  return (
    <button
      className="rounded-full font-sans font-bold text-gray1 text-xs leading-relaxed py-2.5 px-5 whitespace-nowrap bg-[#f0f0f0]"
      onClick={handleClick}
    >
      이전
    </button>
  );
}
