import CoachInfoResponseDto from '@/networks/dto/coach/info/CoachInfoResponseDto';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

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
