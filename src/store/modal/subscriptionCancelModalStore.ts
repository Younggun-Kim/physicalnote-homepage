import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false,
};

type Store = {
  state: State;
  actions: {
    openModal: () => void;
    closeModal: () => void;
  };
};

/**
 * 구독 Store
 */
export const useSubscriptionCancelModalStore = create(
  immer<Store>((set) => ({
    state: initialState,
    actions: {
      openModal: () => {
        set((store) => {
          store.state.isOpen = true;
        });
      },
      closeModal: () => {
        set((store) => {
          store.state.isOpen = false;
        });
      },
    },
  })),
);

export default useSubscriptionCancelModalStore;
