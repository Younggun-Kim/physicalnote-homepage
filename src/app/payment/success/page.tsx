'use client';

import PaymentSuccessContainer from '@/app/payment/success/components/PaymentSuccessContainer';
import Image from 'next/image';
import PaymentSuccessDesc from '@/app/payment/success/components/PaymentSuccessDesc';
import PaymentSuccessLink from '@/app/payment/success/components/PaymentSuccessLink';
import PaymentSuccessIdGuide from '@/app/payment/success/components/PaymentSuccessIdGuide';
import { Suspense } from 'react';

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={null}>
      <PaymentSuccessContainer>
        <Image
          src="/images/pana.svg"
          alt=""
          width={234}
          height={256}
        />
        <PaymentSuccessDesc />
        <PaymentSuccessLink />
        <PaymentSuccessIdGuide />
      </PaymentSuccessContainer>
    </Suspense>
  );
}
