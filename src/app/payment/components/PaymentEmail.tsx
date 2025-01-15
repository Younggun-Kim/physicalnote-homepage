import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import LoginInput from '@/app/login/components/LoginInput';
import React from 'react';
import PaymentField from '@/app/payment/components/PaymentField';

interface Props {
  email: string;
  setEmail: (value: string) => void;
}

const PaymentEmail = ({ email, setEmail }: Props) => {
  return (
    <FieldWrapper>
      <PaymentField className="inline-block min-w-20">이메일</PaymentField>
      <LoginInput
        type="email"
        name="email"
        placeholder="작성 안할 시 회원님의 이메일로 전송됩니다."
        value={email}
        onChange={setEmail}
      />
    </FieldWrapper>
  );
};

export default PaymentEmail;
