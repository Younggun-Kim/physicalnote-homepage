import { Suspense } from 'react';
import PaymentContent from '@/app/payment/components/PaymentContent';

export default async function PaymentPage() {
  return (
    <Suspense fallback={null}>
      <PaymentContent />
    </Suspense>
  );
}
