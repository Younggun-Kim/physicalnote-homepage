import React from 'react';
import { EnabledBtn } from '@/app/components/EnabledBtn';
import Button from '@/app/components/Button';
import { StepProps } from '@/app/signup/components/StepOneForm';
import SidoSelect from '@/app/mypage/team/components/SidoSelect';
import SiGunGuSelect from '@/app/mypage/team/components/SiGunGuSelect';
import Affiliation from '@/app/mypage/team/components/Affiliation';
import TeamAgeSelect from '@/app/mypage/team/components/TeamAgeSelect';
import TeamSizeSelect from '@/app/mypage/team/components/TeamSizeSelect';
import StaffPositionSelect from '@/app/mypage/team/components/StaffPositionSelect';
import usePostSignUp from '@/networks/query/login/useSignUp';
import { isTeamEditStateValid, useProfileEditStore, useTeamEditStore } from '@/store';
import { toast } from 'react-toastify';
import EntrySourceSelect from '@/app/mypage/team/components/EntrySourceSelect';

export const StepTwoForm = ({ onClickNext }: StepProps) => {
  const { name, email, gender, birthDate, phone: cellphoneNo, password } = useProfileEditStore((store) => store.state);
  const state = useTeamEditStore((store) => store.state);
  const {
    siDo: sido,
    siGunGu: sgg,
    emd: dong,
    teamName,
    teamAge: teamAgeGroup,
    staffPosition: position,
    teamSize,
    entrySource,
    teamImage,
  } = state;

  const signUpMutation = usePostSignUp();

  const handleNext = () => {
    onClickNext(2);
  };

  const handlePrev = () => {
    onClickNext(0);
  };

  const handleSignUp = async () => {
    if (!isTeamEditStateValid(state)) {
      toast('입력 항목을 모두 올바르게 입력해주세요.');
      return;
    }

    if (!sido || !sgg || !dong || !teamAgeGroup || !position || !teamSize || !entrySource) {
      toast('입력 항목을 모두 올바르게 입력해주세요.');
      return;
    }

    const response = await signUpMutation.mutateAsync({
      name,
      birthDate: birthDate.getDashValue(),
      gender: gender.getValue(),
      loginId: email.getValue(),
      cellphoneNo: cellphoneNo.getValue(),
      password: password.getValue(),
      sido: sido.label,
      sgg: sgg.label,
      dong: dong.label,
      teamName,
      teamAgeGroup: teamAgeGroup.value,
      position: position.value,
      teamSize: teamSize.value,
      entrySource: entrySource.value,
      teamProfile: teamImage,
    });

    if (response.status) {
      handleNext();
    } else {
      toast(response.message);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col items-end  pt-8 gap-6 sm:max-w-[500px]">
      <SidoSelect />
      <SiGunGuSelect />
      <Affiliation />
      <TeamAgeSelect />
      <TeamSizeSelect />
      <StaffPositionSelect />
      <EntrySourceSelect />
      <div className="mb-6 w-full flex gap-x-5 mt-8">
        <Button
          text="이전"
          containerClassName={'w-[78px] h-[48px] xs:w-[110px] sm:w-[143px]'}
          className="bg-gray3 w-full h-full !text-sm xs:!text-base sm:!text-lg"
          onClick={handlePrev}
        />
        <EnabledBtn
          text="회원가입"
          containerClassName="py-3 flex-1"
          className={'w-full h-full !text-sm xs:!text-base sm:!text-lg'}
          isEnabled={true}
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
};

export default StepTwoForm;
