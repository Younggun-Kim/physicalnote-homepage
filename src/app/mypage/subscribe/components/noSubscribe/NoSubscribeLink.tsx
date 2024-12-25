import Link from 'next/link';
import Image from 'next/image';

export default function NoSubscribeLink() {
  return (
    <Link
      href={'/pricing'}
      className={[
        'rounded-full font-sans font-bold text-gray1 tracking-tighter px-[26px] py-[9px]',
        'text-sm xs:text-base md:text-lg',
      ].join(' ')}
    >
      가격안내
      <Image
        src={'/icons/arrow-right.svg'}
        alt=""
        width={20}
        height={20}
      />
    </Link>
  );
}
