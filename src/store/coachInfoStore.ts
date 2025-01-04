import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { CoachInfoResponseDto } from '@/app/api/coach/route';

interface State {
  coachInfo?: CoachInfoResponseDto;
}

const initialState: State = {
  coachInfo: undefined,
};

type Store = {
  state: State;
  actions: {
    reset: () => void;
    onSet: (coachInfo: CoachInfoResponseDto) => void;
  };
};

/**
 * 코치정보 Store
 */
export const useCoachInfoStore = create(
  immer<Store>((set) => ({
    state: initialState,
    actions: {
      reset: () => {
        set((store) => {
          store.state.coachInfo = undefined;
        });
      },
      onSet: (coachInfo: CoachInfoResponseDto) => {
        set((store) => {
          store.state.coachInfo = coachInfo;
        });
      },
    },
  })),
);

export default useCoachInfoStore;
