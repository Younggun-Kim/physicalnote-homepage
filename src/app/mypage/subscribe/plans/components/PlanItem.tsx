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
        'xs:w-[1px] xs:h-10 xs:mx-5',
        'md:mx-10',
        'lg:w-18 lg:h-[1px] lg:my-7.5',
        'group-hover:bg-white group-hover:my-5',
      ].join(' ')}
    />
  );
};

export default function PlanItem({ category, amount, description, onClick }: Props) {
  return (
    <div
      className={[
        'w-full max-w-[460px] h-[149px] flex justify-between items-center bg-white shadow-md rounded-[20px]',
        'p-4',
        'lg:py-[52px] lg:px-[30px]',
        'lg:flex-col lg:items-center lg:justify-start',
        'lg:w-[280px] lg:h-[360px]',
        'lg:hover:scale-110 hover:bg-primary hover:cursor-pointer group',
        'hover:py-[36px]',
      ].join(' ')}
      onClick={onClick}
    >
      <span className={'font-poetsen font-normal text-xl text-primary whitespace-nowrap px-4 group-hover:text-white'}>
        {category}
      </span>
      <Divider />
      <div
        className={[
          'w-full flex flex-col justify-center items-start gap-2.5',
          'group-hover:text-white group-hover:gap-3',
          'lg:items-center',
        ].join(' ')}
      >
        <p>
          <span
            className={[
              'font-sans font-bold text-gray1 text-2xl whitespace-nowrap',
              'md:text-[1.75rem] lg:text-[2.5rem]',
              'group-hover:text-white',
            ].join(' ')}
          >
            {(amount / 10000).toFixed(0)}만원
          </span>
          <span
            className={[
              'font-sans font-medium text-gray1 text-[0.625rem]',
              'md:text-xs lg:text-base',
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
                'w-full font-sans font-bold text-start text-gray2 text-xs whitespace-nowrap',
                'lg:text-base',
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
            'hidden lg:group-hover:flex',
            'rounded-full justify-center items-center bg-white gap-2.5',
            'font-sans font-bold text-base text-gray1',
            'py-3 px-6',
          ].join(' ')}
        >
          구독하기
          <Image
            className={'md:w-6 md:h-6'}
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
