import Image from 'next/image';

interface Props {
  category: string;
  amount: number;
  description: string[];
  onClick?: () => void;
}

const Divider = () => {
  return (
    <div
      className={[
        'flex-shrink-0',
        'w-0 h-0 bg-primary',
        'xs:w-1 xs:h-10 xs:mx-2.5',
        'md:w-18 md:h-[1px] md:mt-7.5',
        'group-hover:bg-white group-hover:mt-5',
      ].join(' ')}
    />
  );
};

export default function PlanItem({ category, amount, description, onClick }: Props) {
  return (
    <div
      className={[
        'w-[300px] h-[149px] flex justify-between items-center bg-white shadow-md rounded-3xl',
        'py-[18.5px] px-3 xs:py-7.5 xs:pr-6 xs:pl-4 md:py-[52px] md:px-[30px]',
        'md:flex-col md:items-center md:justify-start',
        'md:w-[280px] md:h-[360px]',
        'hover:scale-110 hover:bg-primary hover:cursor-pointer group',
        'hover:py-[36px]',
      ].join(' ')}
      onClick={onClick}
    >
      <span className={'font-poetsen font-normal text-xl text-primary group-hover:text-white'}>{category}</span>
      <Divider />
      <div
        className={[
          'w-full flex flex-col justify-center items-start md:items-center mt-7 gap-5',
          'group-hover:text-white group-hover:mt-5 group-hover:gap-3',
        ].join(' ')}
      >
        <p>
          <span
            className={[
              'font-sans font-bold text-gray1 text-2xl whitespace-nowrap',
              'sm:text-[1.75rem] md:text-[2.5rem]',
              'group-hover:text-white',
            ].join(' ')}
          >
            {(amount / 10000).toFixed(0)}만원
          </span>
          <span
            className={[
              'font-sans font-medium text-gray1 text-[0.625rem]',
              'sm:text-xs md:text-base',
              'group-hover:text-white',
            ].join(' ')}
          >
            {' '}
            / 월
          </span>
        </p>
        <div className={'flex flex-col justify-center items-start group-hover:scale-90'}>
          {description.map((item, idx) => (
            <span
              key={idx}
              className={[
                'w-full font-sans font-bold text-center text-gray2 text-[10px] whitespace-nowrap',
                'md:text-base',
                idx > 2 ? 'text-primary' : '',
                'group-hover:text-white',
              ].join(' ')}
            >
              {idx > 1 ? '+ ' : ''}
              {item}
            </span>
          ))}
        </div>
        <div
          className={[
            'hidden group-hover:flex',
            'rounded-full justify-center items-center bg-white gap-2.5',
            'font-sans font-bold text-base text-gray1',
            'py-3 px-6',
          ].join(' ')}
        >
          구독하기
          <Image
            className={'sm:w-6 sm:h-6'}
            color={'var(--gray1)'}
            src={'/icons/arrow-right.svg'}
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
