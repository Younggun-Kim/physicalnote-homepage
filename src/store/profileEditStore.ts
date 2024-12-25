import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { AuthNumValue, BirthDateValue, EmailValue, GenderValue, PasswordValue, PhoneValue } from '@/data';
import UserDetailResponseDto from '@/api/dto/user/detail/userDetailResponseDto';
import { VisibleValue } from '@/data/visible_type';
import { WritableDraft } from 'immer';

interface ProfileEditState {
  name: string;
  birthDate: BirthDateValue;
  gender: GenderValue;
  email: EmailValue;
  phone: PhoneValue;
  isRequestAuth: boolean;
  authNum: AuthNumValue;
  authMsg: string;
  isPhoneAuth: boolean;
  isPhoneVisible: VisibleValue;
  password: PasswordValue;
  passwordVerify: PasswordValue;
  isPasswordErrorVisible: VisibleValue;
}

const initialState: ProfileEditState = {
  name: '',
  birthDate: BirthDateValue.empty(),
  gender: GenderValue.none(),
  email: EmailValue.empty(),
  phone: PhoneValue.empty(),
  isRequestAuth: false,
  authNum: AuthNumValue.empty(),
  authMsg: '',
  isPhoneAuth: false,
  isPhoneVisible: VisibleValue.none(),
  password: PasswordValue.empty(),
  passwordVerify: PasswordValue.empty(),
  isPasswordErrorVisible: VisibleValue.none(),
};

type ProfileEditStore = {
  state: ProfileEditState;
  actions: {
    resetState: () => void;
    setStateFromDto: (dto: UserDetailResponseDto) => void;
    onChangeName: (value: string) => void;
    onChangeBirthDate: (value: string) => void;
    onChangeEmail: (value: string) => void;
    onChangePhone: (value: string) => void;
    onChangeAuthNum: (value: string) => void;
    onChangeAuthMsg: (value: string) => void;
    onChangeIsRequestAuth: (value: boolean) => void;
    onChangeIsPhoneAuth: (value: boolean) => void;
    onChangeIsPhoneVisible: (type: VisibleValue) => void;
    onChangeGender: (gender: GenderValue) => void;
    onChangePassword: (value: string) => void;
    onChangePasswordVerify: (value: string) => void;
  };
};

const getPasswordErrorVisible = ({
  password,
  passwordVerify,
}: {
  password: WritableDraft<PasswordValue>;
  passwordVerify: WritableDraft<PasswordValue>;
}): VisibleValue => {
  return password.isValid() && password.equals(passwordVerify as PasswordValue)
    ? VisibleValue.invisible()
    : VisibleValue.visible();
};

export const isValidProfileEdit = (state: ProfileEditState): boolean => {
  const { phone, isPhoneAuth, isPasswordErrorVisible } = state;
  return phone.isValid() && isPhoneAuth && isPasswordErrorVisible.isInvisible();
};

const getGenderFrom = (key: string): GenderValue => {
  if (key === 'M') {
    return GenderValue.male();
  } else if (key === 'W') {
    return GenderValue.female();
  } else {
    return GenderValue.none();
  }
};
/**
 * 내정보 수정하기 Store
 */
export const useProfileEditStore = create(
  immer<ProfileEditStore>((set) => {
    return {
      state: initialState,
      actions: {
        resetState: () => {
          set((store) => {
            store.state = initialState;
          });
        },
        setStateFromDto: (dto: UserDetailResponseDto) => {
          set((store) => {
            store.state.name = dto.name;
            store.state.birthDate = new BirthDateValue(dto.birthDate);
            store.state.gender = getGenderFrom(dto.gender);
            store.state.email = new EmailValue(dto.loginId);
            store.state.phone = new PhoneValue(dto.cellPhone);
            store.state.isPhoneAuth = true;
          });
        },
        onChangeName: (value: string) => {
          set((store) => {
            store.state.name = value;
          });
        },
        onChangeBirthDate: (value: string) => {
          set((store) => {
            store.state.birthDate = new BirthDateValue(value);
          });
        },
        onChangeEmail: (value: string) => {
          set((store) => {
            store.state.email = new EmailValue(value);
          });
        },
        onChangeGender: (gender: GenderValue) => {
          set((store) => {
            store.state.gender = gender;
          });
        },
        onChangePhone: (value: string) => {
          set((store) => {
            store.state.phone = new PhoneValue(value);
            store.state.isRequestAuth = false;
            store.state.authNum = AuthNumValue.empty();
            store.state.authMsg = '';
            store.state.isPhoneAuth = false;
            store.state.isPhoneVisible = VisibleValue.none();
          });
        },
        onChangePassword: (value: string) => {
          set((store) => {
            store.state.password = new PasswordValue(value);
            store.state.isPasswordErrorVisible = getPasswordErrorVisible({
              password: store.state.password,
              passwordVerify: store.state.passwordVerify,
            });
          });
        },
        onChangePasswordVerify: (value: string) => {
          set((store) => {
            store.state.passwordVerify = new PasswordValue(value);
            store.state.isPasswordErrorVisible = getPasswordErrorVisible({
              password: store.state.password,
              passwordVerify: store.state.passwordVerify,
            });
          });
        },

        onChangeAuthNum: (value) => {
          set((store) => {
            store.state.authNum = new AuthNumValue(value);
          });
        },

        onChangeAuthMsg: (value) => {
          set((store) => {
            store.state.authMsg = value;
          });
        },

        onChangeIsRequestAuth: (value) => {
          set((store) => {
            store.state.isRequestAuth = value;
          });
        },

        onChangeIsPhoneAuth: (value) => {
          set((store) => {
            store.state.isPhoneAuth = value;
          });
        },

        onChangeIsPhoneVisible: (type) => {
          set((store) => {
            store.state.isPhoneVisible = type;
          });
        },
      },
    };
  }),
);

export default useProfileEditStore;
