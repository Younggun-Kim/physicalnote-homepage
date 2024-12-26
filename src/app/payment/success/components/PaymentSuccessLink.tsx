import Link from 'next/link';

export default function PaymentSuccessLink() {
  return (
    <Link
      className="text-primary text-center font-noto-sans text-sm sm:text-base font-medium underline decoration-solid mt-14"
      target="_blank"
      href={'https://coach.physicalnote.com/login'}
    >
      https://coach.physicalnote.com/login
    </Link>
  );
}
