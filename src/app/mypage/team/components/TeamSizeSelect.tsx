'use client';
import React from 'react';
import { teamSizeDropDownOptions, TeamSizeEnum } from '@/types';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import styled from 'styled-components';
import Dropdown from '@/app/components/dropdown/Dropdown';

export default function TeamSizeSelect() {
  const { teamSize } = useTeamEditStore((store) => store.state);
  const { onChangeTeamSize } = useTeamEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={'회원수'} />
      <StyledDropdown
        className="w-full"
        placeholder="선택"
        options={teamSizeDropDownOptions}
        selectedOption={teamSize}
        onSelect={onChangeTeamSize}
      />
    </FieldWrapper>
  );
}

const StyledDropdown = styled(Dropdown<TeamSizeEnum>)`
  width: 100%;
  max-width: 260px;

  @media (min-width: 769px) {
    max-width: 320px;
    height: 48px;
    & .name {
      font-size: 14px;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    max-width: 300px;
    & .name {
      font-size: 14px;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
    max-width: 300px;
    & .name {
      font-size: 14px;
    }
  }
`;
