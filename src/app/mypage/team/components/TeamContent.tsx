'use client';

import SidoSelect from '@/app/mypage/team/components/SidoSelect';
import SiGunGuSelect from './SiGunGuSelect';
import Affiliation from './Affiliation';
import TeamAgeSelect from './TeamAgeSelect';
import StaffPositionSelect from './StaffPositionSelect';
import TeamEditSubmit from './TeamEditSubmit';
import TeamSizeSelect from '@/app/mypage/team/components/TeamSizeSelect';

export default function MyPageTeamContent() {
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
