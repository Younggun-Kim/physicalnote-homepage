'use client';

import { isValidProfileEdit, useProfileEditStore } from '@/store/profileEditStore';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import { toast } from 'react-toastify';
import usePutUserInfo from '@/networks/query/user/putUserInfo/usePutUserInfo';
import PutUserInfoRequestDto from '@/networks/query/user/putUserInfo/putUserInfoRequestDto';
import useRefetchQuery from '@/app/hooks/useRefetchQuery';

export const ProfileSubmit = () => {
  const state = useProfileEditStore((store) => store.state);
  const userInfoMutation = usePutUserInfo();
  const { refetchAll } = useRefetchQuery();

  const handleClick = async () => {
    try {
      const requestData: PutUserInfoRequestDto = {
        cellPoneNo: state.phone.getValue(),
        changePassword1: state.password.getValue(),
        changePassword2: state.passwordVerify.getValue(),
      };

      await userInfoMutation.mutateAsync(requestData);
      toast('유저 정보 수정 성공');
      await refetchAll();
    } catch (error) {}
  };

  return (
    <div className="w-full h-10 flex mt-8 xs:max-w-[300px] xs:gap-2 sm:max-w-[300px] sm:gap-4 md:max-w-[320px] md:h-12">
      <EnabledBtn
        containerClassName="w-full"
        className="w-full h-full"
        text="수정"
        isEnabled={isValidProfileEdit(state)}
        onClick={handleClick}
      />
    </div>
  );
};
