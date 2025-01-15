import { DropDownOption } from '@/app/components/dropdown/Dropdown';

export type TeamSizeEnum = 'RANGE_0_10' | 'RANGE_11_20' | 'RANGE_21_30' | 'RANGE_OVER_30';

export const TeamSizeMap: Record<TeamSizeEnum, string> = {
  RANGE_0_10: '0~10명',
  RANGE_11_20: '11~20명',
  RANGE_21_30: '21~30명',
  RANGE_OVER_30: '30명 이상',
};

/** DropDown 옵션 목록으로 가져오기*/
export const teamSizeDropDownOptions: DropDownOption<TeamSizeEnum>[] = Object.entries(TeamSizeMap).map(
  ([key, value]) => {
    return {
      value: key,
      label: value,
    } as DropDownOption<TeamSizeEnum>;
  },
);

export const findTeamSizeByKey = (key: string): DropDownOption<TeamSizeEnum> | undefined => {
  const entry = Object.entries(TeamSizeMap).find(([k, _]) => k === key);
  return entry
    ? ({
        value: entry[0],
        label: entry[1],
      } as DropDownOption<TeamSizeEnum>)
    : undefined;
};
