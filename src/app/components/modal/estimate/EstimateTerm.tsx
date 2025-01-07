'use client';

import useEstimateModalStore from '@/store/modal/estimateModalStore';
import CheckBox from '@/app/components/checkbox/CheckBox';
import Link from 'next/link';
import Image from 'next/image';
import { TERM_LINKS } from '@/types/nav_types';

const EstimateTerm = () => {
  const { isServiceCheck, isPrivacyCheck } = useEstimateModalStore((store) => store.state);
  const { onServiceTermToggle, onPrivacyTermToggle } = useEstimateModalStore((store) => store.actions);
  return (
    <div className="flex flex-col gap-2.5 mt-16 md:ml-5">
      <div className="flex gap-2.5 items-center">
        <CheckBox
          isChecked={isServiceCheck}
          onClick={onServiceTermToggle}
        />

        <Link
          href={TERM_LINKS[0].href}
          target="_blank"
          className={'flex gap-2.5'}
        >
          <span className="font-sans font-normal text-gray2 text-2xs md:text-xs">[필수] 서비스 이용 약관</span>
          <Image
            src="/icons/chevron-right.svg"
            alt="서비스 이용약관 이동"
            width={15}
            height={15}
          />
        </Link>
      </div>
      <div
        className="flex gap-2.5 items-center"
        onClick={onPrivacyTermToggle}
      >
        <CheckBox isChecked={isPrivacyCheck} />
        <Link
          href={TERM_LINKS[1].href}
          target="_blank"
          className={'flex gap-2.5'}
        >
          <span className="font-sans font-normal text-gray2 text-2xs md:text-xs">[필수] 개인정보 처리 동의</span>
          <Image
            src="/icons/chevron-right.svg"
            alt="서비스 이용약관 이동"
            width={15}
            height={15}
          />
        </Link>
      </div>
    </div>
  );
};

export default EstimateTerm;
