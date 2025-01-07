'use client';

import useEstimateModalStore, { isValidEstimateModalState } from '@/store/modal/estimateModalStore';
import useEstimateDownload from '@/networks/query/common/estimate/useEstimateDownload';
import { isPlanTypeMonthly } from '@/types/planType';

const EstimateSubmitBtn = () => {
  const { state } = useEstimateModalStore((store) => store);
  const { closeModal } = useEstimateModalStore((store) => store.actions);
  const bgColor = isValidEstimateModalState(state) ? 'bg-secondary' : 'bg-gray3';
  const downloadMutation = useEstimateDownload();

  const handleClick = async () => {
    const { planId, planType, teamName: companyName } = state;

    if (!planId) {
      return;
    }

    await downloadMutation.mutateAsync({
      planId,
      companyName,
      isMonthly: isPlanTypeMonthly(planType) ? 'YES' : 'NO',
    });
    closeModal();
  };
  return (
    <button
      className={`w-ful h-12 flex justify-center items-center rounded-full ${bgColor}`}
      onClick={handleClick}
    >
      <span className="font-sans font-bold text-gray1 text-base">다운로드</span>
    </button>
  );
};

export default EstimateSubmitBtn;
