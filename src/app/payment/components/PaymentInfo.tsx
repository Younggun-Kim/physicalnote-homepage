'use client';

import PaymentField from '@/app/payment/components/PaymentField';
import useProfileEditStore from '../../../store/profileEditStore';

export default function PaymentInfo() {
  const { name, phone, email } = useProfileEditStore((store) => store.state);

  return (
    <div className="flex flex-col justify-start items-start mt-5 gap-5">
      <div>
        <PaymentField className="inline-block min-w-20">이름</PaymentField>
        <span className={'font-sans font-normal text-black text-base leading-relaxed tracking-tighter'}>{name}</span>
      </div>
      <div>
        <PaymentField className="inline-block min-w-20">이메일</PaymentField>
        <span className={'font-sans font-normal text-black text-base leading-relaxed tracking-tighter'}>
          {email.getValue()}
        </span>
      </div>
      <div>
        <PaymentField className="inline-block min-w-20">연락처</PaymentField>
        <span className={'font-sans font-normal text-black text-base leading-relaxed tracking-tighter'}>
          {phone.getValue()}
        </span>
      </div>
    </div>
  );
}
