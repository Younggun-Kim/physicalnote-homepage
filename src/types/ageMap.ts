import { DropDownOption } from '@/app/components/dropdown/Dropdown';

export type AgeEnum =
  | 'U08'
  | 'U09'
  | 'U10'
  | 'U11'
  | 'U12'
  | 'U13'
  | 'U14'
  | 'U15'
  | 'U16'
  | 'U17'
  | 'U18'
  | 'U19'
  | 'U20'
  | 'U21'
  | 'U22'
  | 'U23'
  | 'ADULT_PRO'
  | 'ADULT_SEMIPRO'
  | 'ADULT_AMATEUR'
  | 'ADULT_WOMEN';

export const AgeMap = {
  /// 유소년팀
  U08: 'U-08',
  U09: 'U-09',
  U10: 'U-10',
  U11: 'U-11',
  U12: 'U-12',
  U13: 'U-13',
  U14: 'U-14',
  U15: 'U-15',
  U16: 'U-16',
  U17: 'U-17',
  U18: 'U-18',

  /// 대학/유스팀
  U19: 'U-19',
  U20: 'U-20',
  U21: 'U-21',
  U22: 'U-22',
  U23: 'U-23',

  /// 성인
  ADULT_PRO: '프로',
  ADULT_SEMIPRO: '세미프로',
  ADULT_AMATEUR: '아마추어',
  ADULT_WOMEN: '여성',
};

export const findAgeKeyByValue = (value: string): DropDownOption<AgeEnum> | undefined => {
  const entry = Object.entries(AgeMap).find(([_, val]) => val === value);
  return entry
    ? ({
        value: entry[0],
        label: entry[1],
      } as DropDownOption<AgeEnum>)
    : undefined;
};

/** DropDown 옵션 목록으로 가져오기*/
export const ageDropDownOptions: DropDownOption<AgeEnum>[] = Object.entries(AgeMap).map(([key, value]) => {
  return {
    value: key,
    label: value,
  } as DropDownOption<AgeEnum>;
});
