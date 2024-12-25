import Link from 'next/link';

export default function PlanChangeBtn() {
  return (
    <Link
      className="rounded-full font-sans font-bold text-gray2 text-xs leading-relaxed tracking-tighter py-[5px] px-3 bg-secondary whitespace-nowrap whitespace-nowrap"
      href={'/mypage/subscribe/plans'}
    >
      구독변경
    </Link>
  );
}
