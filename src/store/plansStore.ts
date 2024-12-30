import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';

interface State {
  plan: PlanResponseDto | undefined;
  plans: PlanResponseDto[];
}

const initialState: State = {
  plan: undefined,
  plans: [],
};

type Store = {
  state: State;
  actions: {
    reset: () => void;
    setPlans: (plans: PlanResponseDto[]) => void;
    setPlan: (data: PlanResponseDto | undefined) => void;
  };
};

/**
 * 구독 플랜 Store
 */
export const usePlanStore = create(
  immer<Store>((set) => ({
    state: initialState,
    actions: {
      reset: () => {
        set((store) => {
          store.state = initialState;
        });
      },
      setPlan: (plan: PlanResponseDto | undefined) => {
        set((store) => {
          store.state.plan = plan;
        });
      },
      setPlans: (plans: PlanResponseDto[]) => {
        set((store) => {
          store.state.plans = plans;
        });
      },
    },
  })),
);

export default usePlanStore;
