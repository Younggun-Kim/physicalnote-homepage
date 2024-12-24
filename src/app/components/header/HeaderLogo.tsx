import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogo() {
  return (
    <Link href={'/'}>
      <Image
        src="/icons/logo.svg"
        alt="로고"
        width={27}
        height={34}
      />
    </Link>
  );
}
