import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';
import { AuthNumValue, PhoneValue } from '@/data';
import { VisibleValue } from '@/data/visible_type';

interface State {
  isOpen: boolean;
  tab: 'id' | 'pw';
  name: string;
  phone: PhoneValue;
  authCode: AuthNumValue;
  isRequestAuth: boolean;
  isPhoneAuth: boolean;
  phoneMsg: string;
  phoneMsgVisible: VisibleValue;
  foundId: string;
}

const initialState: State = {
  isOpen: false,
  tab: 'id',
  name: '',
  phone: PhoneValue.empty(),
  authCode: AuthNumValue.empty(),
  isRequestAuth: false,
  isPhoneAuth: false,
  phoneMsg: '',
  phoneMsgVisible: VisibleValue.none(),
  foundId: '',
};

type Store = {
  state: State;
  actions: {
    resetState: () => void;
    openModal: () => void;
    closeModal: () => void;
    onChangeTab: (tab: 'id' | 'pw') => void;
    onInputName: (value: string) => void;
    onInputPhone: (value: string) => void;
    onInputAuthCode: (value: string) => void;

    /** 인증번호 요청 설정 */
    setRequestAuth: (isSuccess: boolean) => void;

    /** 인증 여부 설정 */
    setAuthCodeVerify: (isVerify: boolean) => void;

    /** 메시지 변경 */
    onChangePhoneMsg: (value: string) => void;

    /** 메시지 노출 상태 설정 */
    onChangePhoneMsgVisible: (type: VisibleValue) => void;

    /** 찾은 아이디 저장 */
    onSaveFoundId: (value: string) => void;
  };
};

/** 아이디 찾기 유효성 검사 */
export const isValidFindId = (state: State) => {
  return state.name.length > 2 && state.isPhoneAuth;
};

/** 아이디 찾기 탭인지 검사 */
export const isTabFindId = (tab: 'id' | 'pw') => tab == 'id';

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
      onChangeTab: (tab: 'id' | 'pw') => {
        set((store) => {
          store.state.tab = tab;
          store.state.foundId = '';
        });
      },
      onInputName: (value: string) => {
        set((store) => {
          store.state.name = value;
        });
      },
      onInputPhone: (value: string) => {
        set((store) => {
          store.state.phone = new PhoneValue(value);
          store.state.isRequestAuth = false;
          store.state.authCode = AuthNumValue.empty();
          store.state.isPhoneAuth = false;
          store.state.phoneMsgVisible = VisibleValue.none();
        });
      },
      onInputAuthCode: (value: string) => {
        set((store) => {
          store.state.authCode = new AuthNumValue(value);
          store.state.isPhoneAuth = false;
          store.state.phoneMsgVisible = VisibleValue.none();
        });
      },
      setRequestAuth: (isSuccess: boolean) => {
        set((store) => {
          store.state.isRequestAuth = isSuccess;
          store.state.authCode = AuthNumValue.empty();
          store.state.isPhoneAuth = false;
          store.state.phoneMsgVisible = VisibleValue.none();
        });
      },
      setAuthCodeVerify: (isVerify: boolean) => {
        set((store) => {
          store.state.isPhoneAuth = isVerify;
        });
      },
      onChangePhoneMsg: (value: string) => {
        set((store) => {
          store.state.phoneMsg = value;
        });
      },
      onChangePhoneMsgVisible: (type: VisibleValue) => {
        set((store) => {
          store.state.phoneMsgVisible = type;
        });
      },
      onSaveFoundId: (value: string) => {
        set((store) => {
          store.state.foundId = value;
        });
      },
    },
  })),
);

export default useFindAccountModalStore;
