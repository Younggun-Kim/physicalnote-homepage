import Image from 'next/image';

export function HomeThirdItemThird() {
  return (
    <div className="flex flex-col justify-start items-center">
      <div
        className={[
          'relative w-[128px] h-[121px] mb-15',
          'sm:w-[180px] sm:h-[170px] mb-7.5',
          'md:mb-10',
          'lg:w-[300px] lg:h-[283px] lg:mb-16',
        ].join(' ')}
      >
        <Image
          src="/images/home/home_3_3.png"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className={['font-sans font-bold text-black text-sm mb-2.5', 'lg:text-lg'].join(' ')}>
        <span>혼자 해결하기 어려운 문제는</span>
        <br />
        <span>전문가와 함께 해결하세요</span>
      </p>
      <p className="font-sans font-normal text-gray1 text-2xs text-center lg:text-base">
        <span>여러분 곁에 든든한 운동 전문가 및</span>
        <br />
        <span>스포츠사이언티스트가 항시 대기하고 있습니다.</span>
      </p>
    </div>
  );
}

export default HomeThirdItemThird;
