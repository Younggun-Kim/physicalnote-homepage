import { DropDownOption } from '@/app/components/dropdown/Dropdown';

export default interface AddressHierarchyResponseDto {
  addrName: string; // 행정구역 이름
  cd: string; // 행정구역 코드
  fullAddr: string; // 전체 주소
  level: 'CITY' | 'DISTRICT' | 'DONG'; // 행정구역 레벨
  xcoor: string; // x좌표
  ycoor: string; // y좌표
}

const siDoDtoToOption = ({ addrName, cd }: AddressHierarchyResponseDto) => {
  return {
    value: cd,
    label: addrName,
  } as DropDownOption<string>;
};

export const siDoDtoListToOptionList = (data: AddressHierarchyResponseDto[]): DropDownOption<string>[] => {
  return data.map((e) => siDoDtoToOption(e));
};

export const findMatchingOption = <T>(options: DropDownOption<T>[], searchValue: T): DropDownOption<T> | undefined => {
  return options.find((option) => option.label === searchValue);
};
