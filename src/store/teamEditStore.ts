import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import VisibleValue from '@/data/visible_type';
import { AgeEnum, EntrySourceEnum, StaffPositionEnum, TeamSizeEnum } from '@/types';
import { DropDownOption } from '@/app/components/dropdown/Dropdown';
import { TeamValidateRequestDto } from '@/networks/dto/common';
import CoachPutRequestDto from '@/networks/dto/coach/put/CoachPutRequestDto';

interface TeamEditState {
  siDoList: DropDownOption<string>[];
  siGunGuList: DropDownOption<string>[];
  emdList: DropDownOption<string>[];
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
}

const initialState: TeamEditState = {
  siDoList: [],
  siGunGuList: [],
  emdList: [],
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
};

type TeamEditStore = {
  state: TeamEditState;
  actions: {
    resetState: () => void;
    onChangeSiDoList: (value: DropDownOption<string>[]) => void;
    onChangeSiGunGuList: (value: DropDownOption<string>[]) => void;
    onChangeEmdList: (value: DropDownOption<string>[]) => void;
    onChangeSiDo: (value: DropDownOption<string> | undefined) => void;
    onChangeSiGunGu: (value: DropDownOption<string> | undefined) => void;
    onChangeEmd: (value: DropDownOption<string> | undefined) => void;
    onChangeTeamName: (value: string) => void;
    onChangeTeamImage: (value: string) => void;
    onChangeTeamImageError: (value: boolean) => void;
    onChangeTeamAge: (value: DropDownOption<AgeEnum> | undefined) => void;
    onChangeIsTeamValidate: (value: boolean) => void;
    onChangeTeamValidateMsg: (value: string) => void;
    onChangeTeamSize: (value: DropDownOption<TeamSizeEnum> | undefined) => void;
    onChangeStaffPosition: (value: DropDownOption<StaffPositionEnum> | undefined) => void;
    onChangeEntrySource: (value: DropDownOption<EntrySourceEnum>) => void;
  };
};

export const canTeamValidCheck = (state: TeamEditState) => {
  const { siDo, siGunGu, emd, teamAge, teamName } = state;

  const isSiDoValid = (siDo?.value.length ?? 0) > 0;
  const isSiGunGuValid = (siGunGu?.value.length ?? 0) > 0;
  const isEmdValid = (emd?.value.length ?? 0) > 0;
  const teamNameValid = teamName.length > 2;
  const isTeamAgeValid = (teamAge?.value.length ?? 0) > 0;

  return isSiDoValid && isSiGunGuValid && isEmdValid && teamNameValid && isTeamAgeValid;
};

export const toTeamValidRequestDto = (state: TeamEditState): TeamValidateRequestDto => {
  return {
    sidoCode: state.siDo?.value ?? '',
    sggCode: state.siGunGu?.value ?? '',
    dongCode: state.emd?.value ?? '',
    teamAgeGroup: state.teamAge?.value ?? '',
    teamName: state.teamName,
  } as TeamValidateRequestDto;
};

export const toPutRequestDto = (state: TeamEditState): CoachPutRequestDto => {
  return {
    si: state.siDo?.value ?? '',
    gu: state.siGunGu?.value ?? '',
    dong: state.emd?.value ?? '',
    staffPosition: state.staffPosition?.value ?? '',
    teamAgeGroup: state.teamAge?.value ?? '',
    teamName: state.teamName,
    teamProfile: state.teamImage,
    teamSize: state.teamSize?.value ?? '',
  } as CoachPutRequestDto;
};

export const isTeamEditStateValid = (state: TeamEditState): boolean => {
  const isSidoValid = (state.siDo?.label.length ?? 0) > 0;
  const isSggValid = (state.siGunGu?.label.length ?? 0) > 0;
  const isDongValid = (state.emd?.label.length ?? 0) > 0;
  const isTeamImageValid = state.teamImage.length > 0;
  const isTeamAgeValueValid = (state.teamAge?.value.length ?? 0) > 0;
  const isStaffPositionValueValid = (state.staffPosition?.value.length ?? 0) > 0;
  const isTeamSizeValueValid = (state.teamSize?.value.length ?? 0) > 0;

  return (
    isSidoValid &&
    isSggValid &&
    isDongValid &&
    isTeamImageValid &&
    isTeamAgeValueValid &&
    isStaffPositionValueValid &&
    isTeamSizeValueValid
  );
};

/**
 * 소속관리 수정 Store
 */
export const useTeamEditStore = create(
  immer<TeamEditStore>((set) => {
    return {
      state: initialState,
      actions: {
        resetState: () => {
          set((store) => {
            store.state = initialState;
          });
        },
        onChangeSiDoList: (value: DropDownOption<string>[]) => {
          set((store) => {
            store.state.siDoList = value;
          });
        },
        onChangeSiGunGuList: (value: DropDownOption<string>[]) => {
          set((store) => {
            store.state.siGunGuList = value;
          });
        },
        onChangeEmdList: (value: DropDownOption<string>[]) => {
          set((store) => {
            store.state.emdList = value;
          });
        },
        onChangeSiDo: (value: DropDownOption<string> | undefined) => {
          set((store) => {
            store.state.siDo = value;
            store.state.siGunGu = undefined;
            store.state.emd = undefined;
          });
        },

        onChangeSiGunGu: (value: DropDownOption<string> | undefined) => {
          set((store) => {
            store.state.siGunGu = value;
            store.state.emd = undefined;
          });
        },

        onChangeEmd: (value: DropDownOption<string> | undefined) => {
          set((store) => {
            store.state.emd = value;
          });
        },

        onChangeTeamName: (value: string) => {
          set((store) => {
            store.state.teamName = value;
          });
        },

        onChangeTeamImage: (value: string) => {
          set((store) => {
            store.state.teamImage = value;
          });
        },

        onChangeTeamImageError: (value: boolean) => {
          set((store) => {
            store.state.isTeamImageError = value;
          });
        },

        onChangeTeamAge: (value: DropDownOption<AgeEnum> | undefined) => {
          set((store) => {
            store.state.teamAge = value;
          });
        },

        onChangeIsTeamValidate: (value: boolean) => {
          set((store) => {
            store.state.isTeamValidate = value;
            store.state.teamValidateErrorVisible = value ? VisibleValue.invisible() : VisibleValue.visible();
          });
        },

        onChangeTeamValidateMsg: (value: string) => {
          set((store) => {
            store.state.teamValidateErrorMsg = value;
          });
        },

        onChangeTeamSize: (value: DropDownOption<TeamSizeEnum> | undefined) => {
          set((store) => {
            store.state.teamSize = value;
          });
        },

        onChangeStaffPosition: (value: DropDownOption<StaffPositionEnum> | undefined) => {
          set((store) => {
            store.state.staffPosition = value;
          });
        },

        onChangeEntrySource: (value: DropDownOption<EntrySourceEnum> | undefined) => {
          set((store) => {
            store.state.entrySource = value;
          });
        },
      },
    };
  }),
);

export default useTeamEditStore;
