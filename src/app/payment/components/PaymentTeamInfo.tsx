'use client';

import Image from 'next/image';
import useCoachInfoStore from '@/store/coachInfoStore';

export default function PaymentTeamInfo() {
  const { coachInfo } = useCoachInfoStore((store) => store.state);

  return (
    <div className={'flex justify-start items-center gap-3'}>
      {coachInfo?.teamProfile && (
        <Image
          src={coachInfo?.teamProfile}
          alt="로고"
          width={40}
          height={40}
          style={{ objectFit: 'cover' }}
        />
      )}
      <span className={'font-sans font-normal text-gray1 text-xl leading-relaxed tracking-tighter'}>
        {coachInfo?.teamName} {coachInfo?.teamAgeGroup}
      </span>
    </div>
  );
}
