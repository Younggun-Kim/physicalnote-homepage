import { Suspense } from 'react';
import CardSuccessContent from './components/CardSuccessContent';

export default function CardSuccessPage() {
  return (
    <Suspense fallback={null}>
      <CardSuccessContent />
    </Suspense>
  );
}
