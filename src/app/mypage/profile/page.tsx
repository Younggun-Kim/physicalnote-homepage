'use client';
import MyPageContentWrapper from '@/app/mypage/components/MyPageContentWrapper';
import MyPageContentTitle from '@/app/mypage/components/MyPageContentTitle';
import ProfileDescription from '@/app/mypage/profile/components/ProfileDescription';
import LoginInput from '@/app/login/components/LoginInput';
import { useState } from 'react';
import { PasswordValue } from '@/data';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import { toast } from 'react-toastify';
import { CoachVerifyPwRequestDto } from '@/app/api/coach/verify/route';

export default function MyPageProfilePage() {
  const [password, setPassword] = useState<PasswordValue>(PasswordValue.empty);

  const handlePassword = (value: string) => {
    setPassword(new PasswordValue(value));
  };

  const handleClick = async () => {
    try {
      if (!password.isValid()) {
        throw new Error('비밀번호를 확인해주세요.');
      }

      const requestData = {
        password: password.getValue(),
      } as CoachVerifyPwRequestDto;

      const response = await fetch('/api/coach/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('서버 에러입니다.');
      }

      // TODO: /profile/edit으로 이동
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      } else {
        toast('서버 에러입니다.');
      }
    }
  };

  return (
    <MyPageContentWrapper>
      <MyPageContentTitle>내정보 수정</MyPageContentTitle>
      <ProfileDescription />

      <div className="flex flex-col">
        <span className="font-sans font-normal text-gray2 leading-relaxed tracking-tighter mb-3">비밀번호</span>
        <div className="flex flex-col justify-start items-start gap-[18px] sm:flex-row">
          <LoginInput
            type="password"
            name="password"
            placeholder="영문+특수문자+숫자를 포함한 8자 이상"
            value={password.getValue()}
            onChange={handlePassword}
          />
          <EnabledBtn
            containerClassName="h-10 md:h-12 px-6"
            className="p-0 !text-sm"
            isEnabled={password.isValid()}
            text={'확인'}
            onClick={handleClick}
          />
        </div>
      </div>
    </MyPageContentWrapper>
  );
}
