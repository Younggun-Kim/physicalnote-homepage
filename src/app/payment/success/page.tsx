import Image from 'next/image';
import PaymentSuccessDesc from '@/app/payment/success/components/PaymentSuccessDesc';
import PaymentSuccessLink from '@/app/payment/success/components/PaymentSuccessLink';
import PaymentSuccessIdGuide from '@/app/payment/success/components/PaymentSuccessIdGuide';

export default function PaymentSuccessPage() {
  return (
    <div className={'w-full max-w-[800px] mx-auto flex flex-col justify-start items-center p-[58px 25px]'}>
      <Image
        src="/images/pana.svg"
        alt=""
        width={234}
        height={256}
      />
      <PaymentSuccessDesc />
      <PaymentSuccessLink />
      <PaymentSuccessIdGuide />
    </div>
  );
}
