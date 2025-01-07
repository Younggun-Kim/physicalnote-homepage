import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';
import { PlanType } from '@/types/planType';

interface State {
  isOpen: boolean;
  planId?: number;
  planType: PlanType;
  teamName: string;
  isServiceCheck: boolean;
  isPrivacyCheck: boolean;
}

const initialState: State = {
  isOpen: false,
  planId: undefined,
  planType: 'MONTHLY',
  teamName: '',
  isServiceCheck: false,
  isPrivacyCheck: false,
};

type Store = {
  state: State;
  actions: {
    resetState: () => void;
    openModal: () => void;
    closeModal: () => void;
    onSelectPlan: (planId?: number) => void;
    onSelectPlanType: (type: PlanType) => void;
    onInputTeamName: (value: string) => void;
    onServiceTermToggle: () => void;
    onPrivacyTermToggle: () => void;
  };
};

export const isValidEstimateModalState = ({ planId, teamName, isServiceCheck, isPrivacyCheck }: State): boolean => {
  const isValidPlanId = planId != undefined;
  const isValidTeamName = teamName != undefined && teamName.length > 2;

  return isValidPlanId && isValidTeamName && isServiceCheck && isPrivacyCheck;
};

/**
 * 견적서 모달 Store
 */
export const useEstimateModalStore = create(
  immer<Store>((set) => ({
    state: initialState,
    actions: {
      resetState: () => {
        set((store) => {
          store.state = { ...initialState };
        });
      },
      openModal: () => {
        set((store) => {
          store.state = { ...initialState, isOpen: true };
        });
      },
      closeModal: () => {
        set((store) => {
          store.state = { ...initialState, isOpen: false };
        });
      },

      onSelectPlan: (planId?: number) => {
        set((store) => {
          store.state.planId = planId;
        });
      },
      onSelectPlanType: (type: PlanType) => {
        set((store) => {
          store.state.planType = type;
        });
      },
      onInputTeamName: (value: string) => {
        set((store) => {
          store.state.teamName = value;
        });
      },
      onServiceTermToggle: () => {
        set((store) => {
          store.state.isServiceCheck = !store.state.isServiceCheck;
        });
      },
      onPrivacyTermToggle: () => {
        set((store) => {
          store.state.isPrivacyCheck = !store.state.isPrivacyCheck;
        });
      },
    },
  })),
);

export default useEstimateModalStore;
