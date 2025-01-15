'use client';

import MyPageContentWrapper from '@/app/mypage/components/MyPageContentWrapper';
import MyPageContentTitle from '@/app/mypage/components/MyPageContentTitle';
import ProfileDescription from '@/app/mypage/profile/components/ProfileDescription';
import LoginInput from '@/app/login/components/LoginInput';
import { useState } from 'react';
import { PasswordValue } from '@/data';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import { useRouter } from 'next/navigation';
import useCoachVerify from '@/networks/query/coach/verify/useCoachVerify';
import { toast } from 'react-toastify';

export default function ProfileCotent() {
  const router = useRouter();
  const coachVerifyMutation = useCoachVerify();
  const [password, setPassword] = useState<PasswordValue>(PasswordValue.empty);

  const handlePassword = (value: string) => {
    setPassword(new PasswordValue(value));
  };

  const handleClick = async () => {
    try {
      if (!password.isValid()) {
        toast('비밀번호를 확인해주세요.');
        return;
      }

      const response = await coachVerifyMutation.mutateAsync({
        password: password.getValue(),
      });

      if (!response.status) {
        toast('유효하지 않은 비밀번호입니다.');
        return;
      }

      router.push('/mypage/profile/edit');
    } catch (e) {
      console.log(e);
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
            containerClassName="h-10 md:h-12"
            className="px-6 !text-sm !w-full h-full"
            isEnabled={password.isValid()}
            text={'확인'}
            onClick={handleClick}
          />
        </div>
      </div>
    </MyPageContentWrapper>
  );
}
