import Image from 'next/image';
import { useAppStore } from '@/store';
import Link from 'next/link';

export const HeaderMyPageLink = () => {
  const { closeMenu } = useAppStore((store) => store.actions);
  const { isLoggedIn, username } = useAppStore((store) => store.state);

  const handleClick = () => {
    closeMenu();
  };

  return isLoggedIn ? (
    <Link
      className="flex gap-x-4 items-center hover:cursor-pointer"
      onClick={handleClick}
      href={'/mypage/profile'}
    >
      <span className="font-sans font-medium text-[0.75rem] text-gray1 leading-[13px] tracking-tighter">
        {`${username}님`}
      </span>
      <Image
        src="/icons/user.svg"
        alt=""
        width={20}
        height={20}
      />
    </Link>
  ) : null;
};
export default HeaderMyPageLink;
