import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import GetStatusResponseDto from '@/api/dto/payment/status/GetStatusResponseDto';

interface State {
  subscription: GetStatusResponseDto | undefined;
}

const initialState: State = {
  subscription: undefined,
};

type Store = {
  state: State;
  actions: {
    setSubscription: (data: GetStatusResponseDto | undefined) => void;
  };
};

/**
 * 구독 Store
 */
export const useSubscriptionStore = create(
  immer<Store>((set) => ({
    state: initialState,
    actions: {
      setSubscription: (subscription: GetStatusResponseDto | undefined) => {
        set((store) => {
          store.state.subscription = subscription;
        });
      },
    },
  })),
);

export default useSubscriptionStore;
