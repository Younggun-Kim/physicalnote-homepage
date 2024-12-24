import { DropDownOption } from '@/app/components/dropdown/Dropdown';

export type StaffPositionEnum =
  | 'SUPERVISOR'
  | 'FIELD_COACH'
  | 'FITNESS_COACH'
  | 'SPORTS_SCIENTIST'
  | 'YOUTH_TRAINER'
  | 'MANAGER';

export const StaffPositionMap: Record<StaffPositionEnum, string> = {
  SUPERVISOR: '감독',
  FIELD_COACH: '필드코치',
  FITNESS_COACH: '피지컬코치',
  SPORTS_SCIENTIST: '스포츠사이언티스트',
  YOUTH_TRAINER: '의무트레이너',
  MANAGER: '매니저',
};

/** DropDown 옵션 목록으로 가져오기*/
export const staffPositionDropDownOptions: DropDownOption<StaffPositionEnum>[] = Object.entries(StaffPositionMap).map(
  ([key, value]) => {
    return {
      value: key,
      label: value,
    } as DropDownOption<StaffPositionEnum>;
  },
);

export const findStaffKeyByValue = (value: string): DropDownOption<StaffPositionEnum> | undefined => {
  const entry = Object.entries(StaffPositionMap).find(([_, val]) => val === value);
  return entry
    ? ({
        value: entry[0],
        label: entry[1],
      } as DropDownOption<StaffPositionEnum>)
    : undefined;
};
