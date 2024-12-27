'use client';

import React from 'react';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import Input from '@/app/components/input/Input';
import TeamImageUpload from './TeamImageUpload';

export default function Affiliation() {
  const { teamName, teamImage, isTeamImageError } = useTeamEditStore((store) => store.state);
  const { onChangeTeamName, onChangeTeamImage, onChangeTeamImageError } = useTeamEditStore((store) => store.actions);

  const handleImageChangedSuccess = (url: string) => {
    onChangeTeamImage(url);
    onChangeTeamImageError(false);
  };

  const handleImageChangedFailure = () => {
    onChangeTeamImage('');
    onChangeTeamImageError(true);
  };

  return (
    <div className="w-full flex flex-col gap-2.5">
      <FieldWrapper>
        <FieldTitle text={'소속'} />
        <div className={'w-full flex items-center gap-4'}>
          <Input
            type="text"
            name="birthDate"
            placeholder="구단 팀을 입력해주세요."
            value={teamName}
            className="w-full !py-0 h-10 text-xs xs:text-sm"
            onChange={onChangeTeamName}
          />
          <TeamImageUpload
            onSuccess={handleImageChangedSuccess}
            onFailure={handleImageChangedFailure}
          />
        </div>
      </FieldWrapper>

      {isTeamImageError && (
        <FieldWrapper>
          <FieldTitle />
          <span className={'font-sans font-normal text-[0.625rem] text-red tracking-tighter'}>
            구단 로고를 첨부해주세요.
          </span>
        </FieldWrapper>
      )}

      {!isTeamImageError && teamImage.length > 0 && (
        <FieldWrapper>
          <FieldTitle />
          <span className={'font-sans font-normal text-[0.625rem] text-primary'}>
            {teamImage.split('/').pop() ?? ''}{' '}
          </span>
        </FieldWrapper>
      )}
    </div>
  );
}
