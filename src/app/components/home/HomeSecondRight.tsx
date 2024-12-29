import { HomeSecondRightItem } from './HomeSecondRightItem';

export const HomeSecondRight = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <h6 className={'font-sans font-bold text-black text-xs mb-0.5 lg:text-lg xl:text-xl'}>
        부상의 직접적인 이유 Top 4
      </h6>
      <span className={'font-sans font-medium text-gray2 text-[0.5rem] mb-11 lg:text-xs lg:mb-12'}>
        [ 출처 : 체육포털_2019년 스포츠안전사고 실태조사 ]
      </span>

      <div className="grid grid-cols-2 gap-x-12 gap-y-[30px]">
        <HomeSecondRightItem
          text="오버트레이닝"
          hasUpIcon={true}
          isPrimary={true}
          percent={48}
        />
        <HomeSecondRightItem
          text="사람과의 충돌"
          hasUpIcon={false}
          isPrimary={false}
          percent={24}
        />
        <HomeSecondRightItem
          text="미끄러져 넘어짐"
          hasUpIcon={false}
          isPrimary={false}
          percent={11}
        />
        <HomeSecondRightItem
          text="기타(자신의 실수)"
          hasUpIcon={false}
          isPrimary={false}
          percent={17}
        />
      </div>
    </div>
  );
};

export default HomeSecondRight;
