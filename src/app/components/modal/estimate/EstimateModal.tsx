'use client';

import ModalLayout from '@/app/components/modal/ModalLayout';
import useEstimateModalStore from '@/store/modal/estimateModalStore';
import ModalHeader from '@/app/components/modal/ModalHeader';
import EstimateCheckContent from '@/app/components/modal/estimate/EstimateCheckContent';
import usePlanStore from '@/store/plansStore';
import EstimateFieldName from '@/app/components/modal/estimate/EstimateFieldName';
import Input from '@/app/components/input/Input';
import { isPlanTypeMonthly } from '@/types/planType';
import EstimateTerm from '@/app/components/modal/estimate/EstimateTerm';
import EstimateSubmitBtn from '@/app/components/modal/estimate/EstimateSubmitBtn';

const EstimateModal = () => {
  const { isOpen, planId, planType, teamName } = useEstimateModalStore((store) => store.state);
  const { closeModal, onSelectPlan, onSelectPlanType, onInputTeamName } = useEstimateModalStore(
    (store) => store.actions,
  );
  const { plans } = usePlanStore((store) => store.state);
  const isMonthly = isPlanTypeMonthly(planType);

  if (!isOpen) return null;
  return (
    <ModalLayout onClick={closeModal}>
      <div
        className={[
          'w-full mx-12 shadow-md py-7 rounded-[20px] bg-white pt-6 px-7.5 pb-10',
          'flex flex-col justify-start items-start',
          'max-w-[600px] md:p-11',
        ].join(' ')}
      >
        <ModalHeader
          text={'받고싶은 견적 내용을 선택하세요.'}
          onClose={closeModal}
        />
        <div className="w-full flex flex-col justify-start items-start mt-6 gap-6 md:mt-8">
          <div className="flex flex-col">
            <EstimateFieldName text={'플랜'} />
            <div className="flex flex-col md:flex-row gap-5">
              {plans.map((plan) => (
                <EstimateCheckContent
                  key={plan.name}
                  text={`${plan.name} 플랜`}
                  isOn={planId == plan.id}
                  onClick={() => onSelectPlan(plan.id)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <EstimateFieldName text={'구독방법'} />
            <div className="flex flex-col md:flex-row gap-5">
              <EstimateCheckContent
                text={`월간 구독`}
                isOn={isMonthly}
                onClick={() => onSelectPlanType('MONTHLY')}
              />
              <EstimateCheckContent
                text={`연간 구독`}
                isOn={!isMonthly}
                onClick={() => onSelectPlanType('YEARLY')}
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <EstimateFieldName text={'구단이름'} />
            <Input
              className="h-12 max-w-[390px]"
              type="text"
              name="teamName"
              value={teamName}
              placeholder={'구단 이름을 입력하세요.'}
              onChange={onInputTeamName}
            />
          </div>
        </div>
        <div className="w-full max-w-[400px] flex flex-col gap-2.5 mx-auto">
          <EstimateTerm />
          <EstimateSubmitBtn />
        </div>
      </div>
    </ModalLayout>
  );
};

export default EstimateModal;
