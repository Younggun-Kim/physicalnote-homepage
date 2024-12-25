'use client';
import React from 'react';
import { useTeamEditStore } from '@/store';
import { staffPositionDropDownOptions, StaffPositionEnum } from '@/types';
import styled from 'styled-components';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import Dropdown from '@/app/components/dropdown/Dropdown';

export default function StaffPositionSelect() {
  const { staffPosition } = useTeamEditStore((store) => store.state);
  const { onChangeStaffPosition } = useTeamEditStore((store) => store.actions);
  return (
    <FieldWrapper>
      <FieldTitle text={'직책'} />
      <StyledDropdown
        className="w-full"
        placeholder="선택"
        options={staffPositionDropDownOptions}
        selectedOption={staffPosition}
        onSelect={onChangeStaffPosition}
      />
    </FieldWrapper>
  );
}

const StyledDropdown = styled(Dropdown<StaffPositionEnum>)`
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
