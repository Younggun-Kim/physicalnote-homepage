'use client';

import { isValidProfileEdit, useProfileEditStore } from '@/store/profileEditStore';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import { toast } from 'react-toastify';
import { ApiError, LoginResponse } from '@/app/api/login/route';
import UserDetailResponseDto from '@/api/dto/user/detail/userDetailResponseDto';

export const ProfileSubmit = () => {
  const state = useProfileEditStore((store) => store.state);
  const handleClick = async () => {
    try {
      const requestData = {
        cellPoneNo: state.phone.getValue(),
        changePassword1: state.password.getValue(),
        changePassword2: state.passwordVerify.getValue(),
      };

      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const responseData = (await response.json()) as UserDetailResponseDto | ApiError;

      if (!response.ok) {
        throw new Error('error' in responseData ? responseData.error : '서버 에러');
      }

      alert('유저 정보 수정 성공');
    } catch (error) {
      toast(error instanceof Error ? error.message : '서버 에러');
    }
  };

  return (
    <div className="w-full h-10 flex mt-8 xs:max-w-[300px] xs:gap-2 sm:max-w-[300px] sm:gap-4 md:max-w-[320px] md:h-12">
      <EnabledBtn
        containerClassName="w-full"
        text="수정"
        isEnabled={isValidProfileEdit(state)}
        onClick={handleClick}
      />
    </div>
  );
};
