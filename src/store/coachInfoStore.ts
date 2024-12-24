import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import CoachInfoResponseDto from '@/api/dto/coach/info/CoachInfoResponseDto';

interface State {
  coachInfo?: CoachInfoResponseDto;
}

const initialState: State = {
  coachInfo: undefined,
};

type Store = {
  state: State;
  actions: {
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
      onSet: (coachInfo: CoachInfoResponseDto) => {
        set((store) => {
          store.state.coachInfo = coachInfo;
        });
      },
    },
  })),
);

export default useCoachInfoStore;
