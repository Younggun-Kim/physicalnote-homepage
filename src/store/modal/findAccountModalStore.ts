import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';
import { AuthNumValue, EmailValue, PasswordValue, PhoneValue } from '@/data';
import { VisibleValue } from '@/data/visible_type';

interface State {
  isOpen: boolean;
  tab: 'id' | 'pw';
  name: string;
  email: EmailValue;
  phone: PhoneValue;
  authCode: AuthNumValue;
  isRequestAuth: boolean;
  isPhoneAuth: boolean;
  phoneMsg: string;
  phoneMsgVisible: VisibleValue;
  foundId: string;
  password: PasswordValue;
  passwordVerify: PasswordValue;
  foundPwId: string;
  isSuccessChangePw: boolean;
}

const initialState: State = {
  isOpen: false,
  tab: 'id',
  name: '',
  email: EmailValue.empty(),
  phone: PhoneValue.empty(),
  authCode: AuthNumValue.empty(),
  isRequestAuth: false,
  isPhoneAuth: false,
  phoneMsg: '',
  phoneMsgVisible: VisibleValue.none(),
  foundId: '',
  password: PasswordValue.empty(),
  passwordVerify: PasswordValue.empty(),
  foundPwId: '',
  isSuccessChangePw: false,
};

type Store = {
  state: State;
  actions: {
    resetState: () => void;
    openModal: () => void;
    closeModal: () => void;
    onChangeTab: (tab: 'id' | 'pw') => void;
    onInputName: (value: string) => void;
    onInputEmail: (value: string) => void;
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

    /** 비밀번호 입력 */
    onInputPw: (value: string) => void;

    /** 비밀번호 확인 입력 */
    onInputPwVerify: (value: string) => void;

    /** 비밀번호 찾기로 찾은 Id 저장 */
    onSaveFoundPwId: (value: string) => void;

    /** 비밀번호 변경 성공 여부 */
    setPwChangedResult: (value: boolean) => void;
  };
};

/** 아이디 찾기 유효성 검사 */
export const isValidFindId = (state: State) => {
  return state.authCode.isValid();
};

/** 아이디 찾기 탭인지 검사 */
export const isTabFindId = (tab: 'id' | 'pw') => tab == 'id';

/** 비밀번호 유효성 검사 */
export const isValidPw = ({ password, passwordVerify }: State) => {
  return password.isValid() && password.equals(passwordVerify);
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
      onChangeTab: (tab: 'id' | 'pw') => {
        set((store) => {
          store.state.tab = tab;
          store.state.isRequestAuth = false;
          store.state.authCode = AuthNumValue.empty();
          store.state.isPhoneAuth = false;
          store.state.foundId = '';
          store.state.foundPwId = '';
          store.state.isSuccessChangePw = false;
          store.state.password = PasswordValue.empty();
          store.state.passwordVerify = PasswordValue.empty();
        });
      },
      onInputName: (value: string) => {
        set((store) => {
          store.state.name = value;
        });
      },
      onInputEmail: (value: string) => {
        set((store) => {
          store.state.email = new EmailValue(value);
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
      onInputPw: (value: string) => {
        set((store) => {
          store.state.password = new PasswordValue(value);
        });
      },
      onInputPwVerify: (value: string) => {
        set((store) => {
          store.state.passwordVerify = new PasswordValue(value);
        });
      },
      onSaveFoundPwId: (value: string) => {
        set((store) => {
          store.state.foundPwId = value;
          store.state.password = PasswordValue.empty();
          store.state.passwordVerify = PasswordValue.empty();
        });
      },
      setPwChangedResult: (value: boolean) => {
        set((store) => {
          store.state.isSuccessChangePw = value;
        });
      },
    },
  })),
);

export default useFindAccountModalStore;
