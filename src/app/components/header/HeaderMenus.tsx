'use client';

import { usePathname } from 'next/navigation';
import HEADER_LINKS from '@/types/nav_types';
import NavLink from '@/app/components/header/HeaderNavLink';

export default function HeaderMenus() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1  flex-col justify-start items-start gap-[30px] md:flex-row md:justify-center md:items-center md:gap-[44px]">
      {HEADER_LINKS.map((item) => {
        const isSelected = pathname === item.href;
        return (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isSelected={isSelected}
          />
        );
      })}
    </nav>
  );
}
