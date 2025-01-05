'use client';

import { useState } from 'react';
import { QuestionNameInput } from '@/app/contact/components/QuestionNameInput';
import { QuestionTeamInput } from '@/app/contact/components/QuestionTeamInput';
import { QuestionPhoneInput } from '@/app/contact/components/QuestionPhoneInput';
import { QuestionEmailInput } from '@/app/contact/components/QuestionEmailInput';
import { QuestionDetailInput } from '@/app/contact/components/QuestionDetailInput';
import Image from 'next/image';
import { EmailValue, PhoneValue } from '@/data';
import { toast } from 'react-toastify';
import { useContactMail } from '@/networks/query/useContact';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [phone, setPhone] = useState<PhoneValue>(PhoneValue.empty());
  const [email, setEmail] = useState<EmailValue>(EmailValue.empty());
  const [detail, setDetail] = useState('');
  const contactMutation = useContactMail();

  const handleSendMail = async () => {
    // 필수 입력 값 체크
    if (!name || !team || !phone.getValue() || !email.getValue() || !detail) {
      toast.error('모든 항목을 입력해주세요.');
      return;
    }

    if (!phone.isValid()) {
      toast.error('연락처를 확인해주세요.');
      return;
    }

    if (!email.isValid()) {
      toast.error('이메일 양식을 확인해주세요.');
      return;
    }

    try {
      await contactMutation.mutateAsync({
        name,
        team,
        phone: phone.getValue(),
        email: email.getValue(),
        detail,
      });
    } catch (error) {}
  };

  return (
    <div
      className={['w-full h-screen flex flex-col justify-start items-start py-7.5 px-7.5 max-w-[520px] mx-auto'].join(
        ' ',
      )}
    >
      <div>
        <Image
          src="/images/contact-bg-top.svg"
          alt="오른쪽 상단 이미지"
          width={1240}
          height={976}
          className={'fixed top-0 right-0 -z-10'}
        />
        <Image
          src="/images/contact-bg-bot.svg"
          alt="왼쪽 하단 이미지"
          width={1410}
          height={831}
          className={'fixed bottom-0 left-0 -z-10'}
        />
      </div>
      <h2
        className={[
          'font-sans font-bold text-gray1 text-[1.25rem] z-10',
          'sm:text-2xl md:text-[2.5rem] md:pt-2.5',
        ].join(' ')}
      >
        문의하기
      </h2>
      <p
        className={[
          'w-full inline-block font-sans font-medium text-black text-xs mt-5 mb-6',
          'sm:text-sm lg:text-base',
        ].join(' ')}
      >
        <span>궁금한 점이 있다면 피지컬노트에게 문의하세요!</span>
        <br />
        <span>관리자님의 이메일로 영업일 기준 2-3일 이내에 답변드립니다.</span>
      </p>
      <div className={'w-full flex flex-col justify-start items-center gap-6 z-10'}>
        <QuestionNameInput
          value={name}
          onChange={setName}
        />
        <QuestionTeamInput
          value={team}
          onChange={setTeam}
        />
        <QuestionPhoneInput
          value={phone.getValue()}
          onChange={(value: string) => setPhone(new PhoneValue(value))}
        />
        <QuestionEmailInput
          value={email.getValue()}
          onChange={(value: string) => setEmail(new EmailValue(value))}
        />
        <QuestionDetailInput
          value={detail}
          onChange={setDetail}
        />
        <button
          className={[
            'flex justify-center items-center bg-secondary rounded-full gap-1.5',
            'font-sans font-bold text-gray1 tracking-tighter px-[26px] py-[9px]',
            'text-sm ml-auto',
          ].join(' ')}
          onClick={handleSendMail}
        >
          문의하기
          <Image
            className={'sm:w-6 sm:h-6'}
            src={'/icons/arrow-right.svg'}
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
