import HeaderContactLink from '@/app/components/header/HeaderContactLink';

const PriceBtnGroup = () => {
  return (
    <div className="w-full flex justify-center items-center gap-2.5 mt-10">
      <button
        className={[
          'py-2.5 px-6 border-[1px] border-secondary rounded-full',
          'font-sans font-bold text-gray1 text-sm',
        ].join(' ')}
      >
        견적 확인하기
      </button>
      <HeaderContactLink hasIcon={false} />
    </div>
  );
};

export default PriceBtnGroup;
