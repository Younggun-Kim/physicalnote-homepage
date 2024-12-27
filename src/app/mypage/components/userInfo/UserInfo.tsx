'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import LogoutBtn from '@/app/mypage/components/LogoutBtn';
import WithoutBtn from '@/app/mypage/components/WithoutBtn';
import MyPageTeamName from '@/app/mypage/components/userInfo/MyPageTeamName';
import MyEmail from '@/app/mypage/components/userInfo/MyPageEmail';
import MyPageUserName from '@/app/mypage/components/userInfo/MyPageUserName';
import CoachInfoResponseDto from '@/api/dto/coach/info/CoachInfoResponseDto';
import useGetCoachInfo from '@/app/utils/query/coach/useGetCoachInfo';

export const UserInfo = () => {
  const isMobile = useMediaQuery('(max-width: 425px)');
  const [coachInfo, setCoachInfo] = useState<CoachInfoResponseDto | undefined>();
  const { data: coachInfoData } = useGetCoachInfo();

  useEffect(() => {
    if (coachInfoData == undefined) return;
    setCoachInfo(coachInfoData);
  }, [coachInfoData]);

  return (
    <StyledDiv>
      {coachInfo?.teamProfile ? (
        <Image
          className="img contain-size"
          src={coachInfo?.teamProfile ?? ''}
          alt="logo"
          width={70}
          height={70}
        />
      ) : (
        <div className="img"></div>
      )}
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex justify-start items-center gap-2.5">
          <MyPageUserName>{coachInfo?.name ?? ''}</MyPageUserName>
          {isMobile && <LogoutBtn />}
          {isMobile && <WithoutBtn />}
        </div>
        <MyPageTeamName>
          {coachInfo?.teamName ?? ''}/{coachInfo?.teamAgeGroup ?? ''}
        </MyPageTeamName>
        {!isMobile && <MyEmail>{coachInfo?.loginId ?? ''}</MyEmail>}
      </div>
    </StyledDiv>
  );
};

export default UserInfo;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 8px;
  object-fit: cover;

  & .img {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 426px) {
    flex-direction: column;
    align-items: center;

    & .img {
      width: 70px;
      height: 70px;
    }
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
