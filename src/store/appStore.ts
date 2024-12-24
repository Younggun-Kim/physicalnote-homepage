import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AppState {
  isVisibleMenu: boolean;
  isLoggedIn: boolean;
  token?: string;
  username?: string;
}

const initialState: AppState = {
  isVisibleMenu: false,
  isLoggedIn: false,
  token: undefined,
  username: undefined,
};

type AppStore = {
  state: AppState;
  actions: {
    changeMenuVisible: () => void;
    closeMenu: () => void;
    onLogin: (token: string, name?: string) => void;
    onLogout: () => void;
  };
};

/**
 * 로그인 화면 Store
 */
export const useAppStore = create(
  immer<AppStore>((set) => ({
    state: initialState,
    actions: {
      changeMenuVisible: () => {
        set((store) => {
          store.state.isVisibleMenu = !store.state.isVisibleMenu;
        });
      },
      closeMenu: () => {
        set((store) => {
          store.state.isVisibleMenu = false;
        });
      },
      onLogin: (token: string, name?: string) => {
        set((store) => {
          store.state.isLoggedIn = true;
          store.state.token = token;
          store.state.username = name;
        });
      },
      onLogout: () => {
        set((store) => {
          store.state.isLoggedIn = false;
          store.state.token = undefined;
          store.state.username = undefined;
        });
      },
    },
  })),
);

export default useAppStore;
