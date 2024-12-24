import Link from 'next/link';
import { cls } from '@/utils';
import { useAppStore } from '@/store';

export interface NavLinkProps {
  href: string;
  label: string;
  isSelected: boolean;
}

export default function NavLink({ href, label, isSelected }: NavLinkProps) {
  const { closeMenu } = useAppStore((store) => store.actions);
  return (
    <Link
      href={href}
      className={cls('font-sans font-bold text-xl', isSelected ? 'text-primary' : 'text-gray1')}
      onClick={closeMenu}
    >
      {label}
    </Link>
  );
}
