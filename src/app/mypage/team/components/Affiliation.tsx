'use client';

import React from 'react';
import { useTeamEditStore } from '@/store';
import FieldWrapper from '@/app/mypage/profile/edit/components/FieldWrapper';
import FieldTitle from '@/app/mypage/profile/edit/components/FieldTitle';
import styled from 'styled-components';
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
        <AffiliationStyledDiv>
          <Input
            type="text"
            name="birthDate"
            placeholder="구단 팀을 입력해주세요."
            value={teamName}
            className="w-full !py-0"
            onChange={onChangeTeamName}
          />
          <TeamImageUpload
            onSuccess={handleImageChangedSuccess}
            onFailure={handleImageChangedFailure}
          />
        </AffiliationStyledDiv>
      </FieldWrapper>

      {isTeamImageError && (
        <FieldWrapper>
          <FieldTitle />
          <StyledError>구단 로고를 첨부해주세요.</StyledError>
        </FieldWrapper>
      )}

      {!isTeamImageError && teamImage.length > 0 && (
        <FieldWrapper>
          <FieldTitle />
          <StyledSuccess>{teamImage.split('/').pop() ?? ''} </StyledSuccess>
        </FieldWrapper>
      )}
    </div>
  );
}

export const AffiliationStyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  & input {
    height: 40px;
    font-feature-settings: 'calt' off;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    letter-spacing: -0.6px;
    color: black;
  }

  &::placeholder {
    color: var(--gray2);
  }

  @media (min-width: 769px) {
    & input {
      font-size: 14px;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    & input {
      font-size: 14px;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
    & input {
      font-size: 14px;
    }
  }
`;

export const StyledError = styled.span`
  color: red;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const StyledSuccess = styled.span`
  color: var(--primary);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.5px;
`;
