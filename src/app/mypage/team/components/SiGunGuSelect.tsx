'use client';

import React from 'react';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import { StyledDropdown } from '@/app/mypage/team/components/SidoSelect';
import FieldTitle from '../../profile/edit/components/FieldTitle';

export default function SiGunGuSelect() {
  const { siGunGu, siGunGuList, emd, emdList } = useTeamEditStore((store) => store.state);
  const { onChangeSiGunGu, onChangeEmd } = useTeamEditStore((store) => store.actions);

  return (
    <FieldWrapper>
      <FieldTitle text={''} />
      <div className="w-full max-w-[300px] flex items-center gap-4 sm:max-w-[400px]">
        <StyledDropdown
          className="flex-1"
          placeholder="시군구"
          options={siGunGuList}
          selectedOption={siGunGu}
          onSelect={onChangeSiGunGu}
        />
        <StyledDropdown
          className="flex-1"
          placeholder="읍면동"
          options={emdList}
          selectedOption={emd}
          onSelect={onChangeEmd}
        />
      </div>
    </FieldWrapper>
  );
}
