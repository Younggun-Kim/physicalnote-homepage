'use client';

import SidoSelect from '@/app/mypage/team/components/SidoSelect';
import SiGunGuSelect from './components/SiGunGuSelect';
import Affiliation from './components/Affiliation';
import TeamAgeSelect from './components/TeamAgeSelect';
import StaffPositionSelect from './components/StaffPositionSelect';
import TeamEditSubmit from './components/TeamEditSubmit';
import TeamSizeSelect from '@/app/mypage/team/components/TeamSizeSelect';

export default function MyPageTeamPage() {
  return (
    <div
      className={[
        'flex flex-col justify-start items-center gap-4 py-7.5',
        'sm:gap-6 sm:min-w-[385px] sm:py-0',
        'md:min-w-[485px]',
      ].join(' ')}
    >
      <SidoSelect />
      <SiGunGuSelect />
      <Affiliation />
      <TeamAgeSelect />
      <TeamSizeSelect />
      <StaffPositionSelect />
      <TeamEditSubmit />
    </div>
  );
}
