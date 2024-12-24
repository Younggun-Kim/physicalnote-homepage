import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { AuthNumValue, BirthDateValue, EmailValue, GenderValue, PasswordValue } from '@/data';
import VisibleValue from '@/data/visible_type';
import PhoneValue from '@/data/phoneValue';
import { AgeEnum, EntrySourceEnum, StaffPositionEnum, TeamSizeEnum } from '@/types';
import { DropDownOption } from '@/app/components/dropdown/Dropdown';

interface SignupState {
  name: string;
  birthDate: BirthDateValue;
  isBirthDateErrorVisible: VisibleValue;
  email: EmailValue;
  gender: GenderValue;
  password: PasswordValue;
  passwordVerify: PasswordValue;
  isPasswordErrorVisible: VisibleValue;
  phone: PhoneValue;
  isRequestAuth: boolean;
  authNum: AuthNumValue;
  authMsg: string;
  isPhoneAuth: boolean;
  isPhoneVisible: VisibleValue;
  isTermChecked: boolean;
  siDo?: DropDownOption<string>;
  siGunGu?: DropDownOption<string>;
  emd?: DropDownOption<string>;
  teamName: string;
  teamImage: string;
  isTeamImageError: boolean;
  teamAge?: DropDownOption<AgeEnum>;
  isTeamValidate: boolean;
  teamValidateErrorVisible: VisibleValue;
  teamValidateErrorMsg: string;
  teamSize?: DropDownOption<TeamSizeEnum>;
  staffPosition?: DropDownOption<StaffPositionEnum>;
  entrySource?: DropDownOption<EntrySourceEnum>;
  isValidSignup: boolean;
}

const initialState: SignupState = {
  name: '',
  birthDate: BirthDateValue.empty(),
  isBirthDateErrorVisible: VisibleValue.none(),
  email: EmailValue.empty(),
  gender: GenderValue.none(),
  password: PasswordValue.empty(),
  passwordVerify: PasswordValue.empty(),
  isPasswordErrorVisible: VisibleValue.none(),
  phone: PhoneValue.empty(),
  isRequestAuth: false,
  authNum: AuthNumValue.empty(),
  authMsg: '',
  isPhoneAuth: false,
  isPhoneVisible: VisibleValue.none(),
  isTermChecked: false,
  siDo: undefined,
  siGunGu: undefined,
  emd: undefined,
  teamName: '',
  teamImage: '',
  isTeamImageError: true,
  teamAge: undefined,
  isTeamValidate: false,
  teamValidateErrorVisible: VisibleValue.none(),
  teamValidateErrorMsg: '',
  teamSize: undefined,
  staffPosition: undefined,
  entrySource: undefined,
  isValidSignup: false,
};

type SignupStore = {
  state: SignupState;
  actions: {
    signUpStoreInit: () => void;
    changeName: (name: string) => void;
    changeBirthDate: (birthDate: string) => void;
    changeEmail: (value: string) => void;
    changeGender: (gender: GenderValue) => void;
    changePassword: (value: string) => void;
    changePasswordVerify: (value: string) => void;
    changePhone: (value: string) => void;
    changeAuthNum: (value: string) => void;
    changeAuthMsg: (value: string) => void;
    changeIsRequestAuth: (value: boolean) => void;
    changeIsPhoneAuth: (value: boolean) => void;
    changeIsPhoneVisible: (type: VisibleValue) => void;
    changeIsTermChecked: (value: boolean) => void;
    changeSiDo: (value: DropDownOption<string>) => void;
    changeSiGunGu: (value: DropDownOption<string>) => void;
    changeEmd: (value: DropDownOption<string>) => void;
    changeTeamName: (value: string) => void;
    changeTeamImage: (value: string) => void;
    changeTeamImageError: (value: boolean) => void;
    changeTeamAge: (value: DropDownOption<AgeEnum>) => void;
    changeIsTeamValidate: (value: boolean) => void;
    changeTeamValidateMsg: (value: string) => void;
    changeTeamSize: (value: DropDownOption<TeamSizeEnum>) => void;
    changeStaffPosition: (value: DropDownOption<StaffPositionEnum>) => void;
    changeEntrySource: (value: DropDownOption<EntrySourceEnum>) => void;
  };
};

export const useSignupStore = create(
  immer<SignupStore>((set) => ({
    state: initialState,
    actions: {
      signUpStoreInit: () => {
        set((store) => {
          store.state = initialState;
        });
      },

      changeName: (value) => {
        set((store) => {
          store.state.name = value;
        });
      },

      changeBirthDate: (value) => {
        set((store) => {
          const birthDate = new BirthDateValue(value);
          store.state.birthDate = birthDate;
          store.state.isBirthDateErrorVisible = birthDate.isValid() ? VisibleValue.invisible() : VisibleValue.visible();
        });
      },

      changeEmail: (value) => {
        set((store) => {
          store.state.email = new EmailValue(value);
        });
      },

      changeGender: (value) => {
        set((store) => {
          store.state.gender = value;
        });
      },

      changePassword: (value) => {
        set((store) => {
          store.state.password = new PasswordValue(value);
          store.state.isPasswordErrorVisible =
            store.state.password.isValid() && store.state.password.equals(store.state.passwordVerify as PasswordValue)
              ? VisibleValue.invisible()
              : VisibleValue.visible();
        });
      },

      changePasswordVerify: (value) => {
        set((store) => {
          store.state.passwordVerify = new PasswordValue(value);
          store.state.isPasswordErrorVisible =
            store.state.password.isValid() && store.state.password.equals(store.state.passwordVerify as PasswordValue)
              ? VisibleValue.invisible()
              : VisibleValue.visible();
        });
      },

      changePhone: (value) => {
        set((store) => {
          store.state.phone = new PhoneValue(value);
        });
      },

      changeAuthNum: (value) => {
        set((store) => {
          store.state.authNum = new AuthNumValue(value);
        });
      },

      changeAuthMsg: (value) => {
        set((store) => {
          store.state.authMsg = value;
        });
      },

      changeIsRequestAuth: (value) => {
        set((store) => {
          store.state.isRequestAuth = value;
        });
      },

      changeIsPhoneAuth: (value) => {
        set((store) => {
          store.state.isPhoneAuth = value;
        });
      },

      changeIsPhoneVisible: (type) => {
        set((store) => {
          store.state.isPhoneVisible = type;
        });
      },

      changeIsTermChecked: (value) => {
        set((store) => {
          store.state.isTermChecked = value;
        });
      },

      changeSiDo: (value: DropDownOption<string>) => {
        set((store) => {
          store.state.siDo = value;
          store.state.siGunGu = undefined;
          store.state.emd = undefined;
        });
      },

      changeSiGunGu: (value: DropDownOption<string>) => {
        set((store) => {
          store.state.siGunGu = value;
          store.state.emd = undefined;
        });
      },

      changeEmd: (value: DropDownOption<string>) => {
        set((store) => {
          store.state.emd = value;
        });
      },

      changeTeamName: (value: string) => {
        set((store) => {
          store.state.teamName = value;
        });
      },

      changeTeamImage: (value: string) => {
        set((store) => {
          store.state.teamImage = value;
        });
      },

      changeTeamImageError: (value: boolean) => {
        set((store) => {
          store.state.isTeamImageError = value;
        });
      },

      changeTeamAge: (value: DropDownOption<AgeEnum>) => {
        set((store) => {
          store.state.teamAge = value;
        });
      },

      changeIsTeamValidate: (value: boolean) => {
        set((store) => {
          store.state.isTeamValidate = value;
          store.state.teamValidateErrorVisible = value ? VisibleValue.invisible() : VisibleValue.visible();
        });
      },

      changeTeamValidateMsg: (value: string) => {
        set((store) => {
          store.state.teamValidateErrorMsg = value;
        });
      },

      changeTeamSize: (value: DropDownOption<TeamSizeEnum>) => {
        set((store) => {
          store.state.teamSize = value;
        });
      },

      changeStaffPosition: (value: DropDownOption<StaffPositionEnum>) => {
        set((store) => {
          store.state.staffPosition = value;
        });
      },

      changeEntrySource: (value: DropDownOption<EntrySourceEnum>) => {
        set((store) => {
          store.state.entrySource = value;
        });
      },
    },
  })),
);

export default useSignupStore;
