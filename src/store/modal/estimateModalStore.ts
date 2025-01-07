import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false,
};

type Store = {
  state: State;
  actions: {
    resetState: () => void;
    openModal: () => void;
    closeModal: () => void;
  };
};

/**
 * 계정찾기 Store
 */
export const useFindAccountModalStore = create(
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
    },
  })),
);

export default useFindAccountModalStore;
