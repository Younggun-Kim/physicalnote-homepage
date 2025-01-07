'use client';

import HeaderContactLink from '@/app/components/header/HeaderContactLink';
import useEstimateModalStore from '@/store/modal/estimateModalStore';

const PriceBtnGroup = () => {
  const { openModal } = useEstimateModalStore((store) => store.actions);
  return (
    <div className="w-full flex justify-center items-center gap-2.5 mt-10">
      <button
        className={[
          'py-2.5 px-6 border-[1px] border-secondary rounded-full',
          'font-sans font-bold text-gray1 text-sm',
        ].join(' ')}
        onClick={openModal}
      >
        견적 확인하기
      </button>
      <HeaderContactLink hasIcon={false} />
    </div>
  );
};

export default PriceBtnGroup;
