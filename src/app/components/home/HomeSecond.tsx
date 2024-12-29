import HomeSecondLeft from '@/app/components/home/HomeSecondLeft';
import HomeSecondRight from './HomeSecondRight';

export const HomeSecond = () => {
  return (
    <div className={['w-full max-w-[2560px] flex justify-center items-start'].join(' ')}>
      <div
        className={[
          'flex flex-col justify-start items-start gap-12',
          'pt-9 px-7.5',
          'xs:inline-flex xs:mx-auto xs:pb-15',
          'sm:pt-25 sm:px-12 sm:flex-row sm:justify-between sm:w-full',
          'md:w-auto sm:justify-center',
          'lg:gap-[180px] lg:pt-[150px]',
        ].join(' ')}
      >
        <HomeSecondLeft />
        <HomeSecondRight />
      </div>
    </div>
  );
};

export default HomeSecond;
