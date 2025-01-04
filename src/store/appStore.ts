import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { deleteCookie, setCookie } from 'cookies-next';
import UserDetailResponseDto from '@/networks/dto/user/detail/userDetailResponseDto';

interface AppState {
  isVisibleMenu: boolean;
  isLoggedIn: boolean;
  token?: string;
  username?: string;
  userInfo?: UserDetailResponseDto;
}

const initialState: AppState = {
  isVisibleMenu: false,
  isLoggedIn: false,
  token: undefined,
  username: undefined,
  userInfo: undefined,
};

type AppStore = {
  state: AppState;
  actions: {
    reset: () => void;
    changeMenuVisible: () => void;
    closeMenu: () => void;
    setUserInfo: (dto: UserDetailResponseDto | undefined) => void;
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
      reset: () => {
        set((store) => {
          store.state.isVisibleMenu = false;
          store.state.isLoggedIn = false;
          store.state.token = undefined;
          store.state.username = undefined;
        });
      },
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
      setUserInfo: (dto: UserDetailResponseDto | undefined) => {
        set((store) => {
          store.state.userInfo = dto;
        });
      },
      onLogin: (token: string, name?: string) => {
        set((store) => {
          store.state.isLoggedIn = true;
          store.state.token = token;
          store.state.username = name;
        });

        setCookie('token', token);
      },
      onLogout: () => {
        set((store) => {
          store.state.isLoggedIn = false;
          store.state.token = undefined;
          store.state.username = undefined;
        });
        deleteCookie('token');
      },
    },
  })),
);

export default useAppStore;
