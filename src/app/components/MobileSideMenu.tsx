'use client';

import { useAppStore } from '@/store';
import HeaderLoginLink from '@/app/components/header/HeaderLoginLink';
import HeaderMyPageLink from '@/app/components/header/HeaderMyPageLink';
import HeaderMenus from '@/app/components/header/HeaderMenus';
import HeaderCoachLink from '@/app/components/header/HeaderCoachLink';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import HeaderContactLink from '@/app/components/header/HeaderContactLink';

export default function MobileSideMenu() {
  const { isVisibleMenu } = useAppStore((store) => store.state);
  const anim = isVisibleMenu ? 'translate-x-0' : 'translate-x-full';
  const isMobile = useMediaQuery(768);

  if (!isMobile) return null;

  return (
    <div
      className={
        'min-w-[230px] h-full p-6 fixed top-0 right-0 flex flex-col justify-start items-start bg-white z-[200]' +
        ` rounded-l-[10px] shadow-md ${anim}`
      }
    >
      <HeaderLoginLink />
      <HeaderMyPageLink />
      <div className="mt-11 mb-20">
        <HeaderMenus />
      </div>
      <div className="mb-3">
        {/* TODO: 문의하기 */}
        {/*<MoveFaqButton />*/}
      </div>
      <HeaderContactLink />
      <HeaderCoachLink />
    </div>
  );
}
