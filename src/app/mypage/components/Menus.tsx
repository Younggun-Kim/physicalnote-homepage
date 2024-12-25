'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MY_PAGE_LINKS } from '@/types/nav_types';

export const Menus = () => {
  return (
    <ul className="flex flex-col gap-y-7.5">
      {MY_PAGE_LINKS.map((link) => (
        <Menu
          key={link.label}
          href={link.href}
          label={link.label}
        />
      ))}
    </ul>
  );
};

interface MenuProps {
  href: string;
  label: string;
}

const Menu = ({ href, label }: MenuProps) => {
  const pathname = usePathname();
  const isSelected = href == pathname;
  const textColor = isSelected ? 'text-primary' : 'text-gray1';

  return (
    <li>
      <Link
        className="w-full flex items-center gap-x-1"
        href={href}
      >
        <span className={`flex-1 font-sans font-normal text-base ${textColor}`}>{label}</span>
        <Image
          src="/icons/chevron-right.svg"
          alt=""
          width={24}
          height={24}
        />
      </Link>
    </li>
  );
};

export default Menus;
