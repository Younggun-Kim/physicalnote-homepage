interface Props {
  category: 'Monthly' | 'Yearly';
  amount: number;
  description: string;
  onClick?: () => void;
}

export default function PlanItem({ category, amount, description, onClick }: Props) {
  const categoryKor = category === 'Monthly' ? '월' : '년';
  return (
    <div
      className={[
        'w-full flex justify-between items-center bg-white shadow-md rounded-3xl',
        'py-[18.5px] px-3 xs:py-7.5 xs:pr-6 xs:pl-4 md:py-[52px] md:px-[30px]',
        'md:flex-col md:items-center',
      ].join(' ')}
      onClick={onClick}
    >
      <span className={'font-poetsen font-normal text-xl text-primary'}>{category}</span>
      <div className={['w-0 h-0 bg-primary', 'xs:w-1 xs:h-10 xs:mx-2.5', 'md:w-18 md:h-1 md:mt-7.5'].join(' ')} />
      <div className={'flex flex-col justify-center items-start md:items-center'}>
        <span className={'mt-12'}>
          <span className={'font-sans font-bold text-gray1 text-2xl sm:text-[1.75rem] md:text-[2.5rem]'}>
            {amount / 10000}만원
          </span>
          <span className={'font-sans font-medium text-gray1 text-[0.625rem] sm:text-xs md:text-base'}>
            / {categoryKor}
          </span>
        </span>
        <span
          className={[
            'font-sans font-bold text-primary',
            'text-xs xs:text-sm md:text-xl',
            'mt-[7px] xs:mt-[15px] md:mt-12',
          ].join(' ')}
        >
          기본 인원 수: {30}명
        </span>
        <span className={'font-sans font-medium text-gray2 text-[10px] whitespace-nowrap md:text-base'}>
          {description}
        </span>
      </div>
    </div>
  );
}
