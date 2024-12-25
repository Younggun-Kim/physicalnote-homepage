'use client';

import { NameInput } from '@/app/mypage/profile/edit/components/NameInput';
import { BirthDateInput } from '@/app/mypage/profile/edit/components/BirthDateInput';
import { GenderSelect } from './components/GenderSelect';
import { EmailInput } from './components/EmailInput';
import { PhoneInfo } from './components/PhoneInfo';
import { PhoneAuthCode } from './components/PhoneAuthCode';
import AuthCodeMsg from './components/AuthCodeMsg';
import { PasswordInput } from './components/PasswordInput';
import PasswordMsg from './components/PasswordMsg';
import { ProfileSubmit } from './components/ProfileSubmit';
import { useProfileEditStore } from '@/store';
import { useEffect } from 'react';
import { PasswordVerifyInput } from '@/app/mypage/profile/edit/components/PasswordVerifyInput';

export default function MyPageProfileEditPage() {
  const { setStateFromDto } = useProfileEditStore((store) => store.actions);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user');

        if (!response.ok) {
          throw new Error('유저 정보를 불러오는데 실패했습니다.');
        }

        const data = await response.json();
        setStateFromDto(data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    fetchUser();
  }, [setStateFromDto]);

  return (
    <div
      className="flex flex-col justify-start items-center gap-4 py-7.5
                sm:gap-6 sm:min-w-[385px] sm:py-0
                md:min-w-[485px]"
    >
      <NameInput />
      <BirthDateInput />
      <GenderSelect />
      <EmailInput />
      <div className="w-full flex-col justify-start items-start">
        <PhoneInfo />
        <PhoneAuthCode />
        <AuthCodeMsg />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-1.5">
        <PasswordInput />
        <PasswordVerifyInput />
        <PasswordMsg />
      </div>
      <ProfileSubmit />
    </div>
  );
}
