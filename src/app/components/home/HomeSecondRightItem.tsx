import Image from 'next/image';

interface Props {
  text: string;
  hasUpIcon: boolean;
  isPrimary: boolean;
  percent: number;
  className?: string; // className prop 추가
}

export const HomeSecondRightItem = ({
  text,
  hasUpIcon,
  isPrimary,
  percent,
  className, // className prop 받기
}: Props) => {
  const titleColor = isPrimary ? 'text-primary' : 'text-gray2';
  const descriptionColor = isPrimary ? 'text-primary' : 'text-[#d9d9d9]';
  const fontWeight = isPrimary ? 'black' : 'medium';
  return (
    <div className={className}>
      <div className="flex items-center gap-[6px] mb-1">
        <span
          className={`font-sans font-medium ${titleColor} ${fontWeight} whitespace-nowrap text-sm xl:text-xl 2xl:text-2xl`}
        >
          {text}
        </span>
        {hasUpIcon && (
          <div className={'relative w-[1.3125rem] h-5'}>
            <Image
              src="/icons/up.svg"
              alt="up"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
      </div>
      <span
        className={[
          `font-sans font-bold ${descriptionColor} text-[2.875rem]`,
          'sm:text-[3.125rem]',
          'md:text-5.375rem',
          'lg:text-6rem',
        ].join(' ')}
      >{`${percent}%`}</span>
    </div>
  );
};

export default HomeSecondRightItem;
