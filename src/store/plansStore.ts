import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import PlanResponseDto from '@/networks/dto/payment/PlanResponseDto';

interface State {
  plan: PlanResponseDto | undefined;
}

const initialState: State = {
  plan: undefined,
};

type Store = {
  state: State;
  actions: {
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
      setPlan: (plan: PlanResponseDto | undefined) => {
        set((store) => {
          store.state.plan = plan;
        });
      },
    },
  })),
);

export default usePlanStore;
