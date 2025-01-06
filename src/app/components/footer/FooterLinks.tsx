import Link from 'next/link';
import { TERM_LINKS } from '@/types/nav_types';

interface Props {
  href: string;
  label: string;
}

export const FooterLink = ({ href, label }: Props) => {
  return (
    <Link
      href={href}
      target={'_blank'}
    >
      <span className="text-gray2 font-medium font-sans text-2xs">{label}</span>
    </Link>
  );
};

export const FooterLinks = () => {
  return (
    <div className={'flex justify-center items-center xs:justify-start xs:gap-5 xl:justify-end xl:w-full'}>
      {TERM_LINKS.map((link) => (
        <FooterLink
          key={link.href}
          href={link.href}
          label={link.label}
        />
      ))}
    </div>
  );
};
