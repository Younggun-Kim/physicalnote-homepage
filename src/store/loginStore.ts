import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { EmailValue, PasswordValue } from '@/data';

interface LoginState {
  loginId: EmailValue;
  password: PasswordValue;
}

const initialState: LoginState = {
  loginId: EmailValue.empty(),
  password: PasswordValue.empty(),
};

type LoginStore = {
  state: LoginState;
  actions: {
    resetState: () => void;
    onLoginIdInput: (value: string) => void;
    onPasswordInput: (value: string) => void;
  };
};

/**
 * 로그인 화면 Store
 */
export const useLoginStore = create(
  immer<LoginStore>((set) => ({
    state: initialState,
    actions: {
      resetState: () => {
        set((store) => {
          store.state = initialState;
        });
      },
      onLoginIdInput: (value) => {
        set((store) => {
          store.state.loginId = new EmailValue(value);
        });
      },
      onPasswordInput: (value) => {
        set((store) => {
          store.state.password = new PasswordValue(value);
        });
      },
    },
  })),
);

export default useLoginStore;
