import { DropDownOption } from '@/app/components/dropdown/Dropdown';

export type EntrySourceEnum = 'INTERNET_SEARCH' | 'SNS_ADVERTISEMENT' | 'RECOMMENDATION' | 'BLOG' | 'OTHER';

export const EntrySourceMap: Record<EntrySourceEnum, string> = {
  INTERNET_SEARCH: '인터넷 검색',
  SNS_ADVERTISEMENT: 'SNS 광고',
  RECOMMENDATION: '지인추천',
  BLOG: '블로그',
  OTHER: '기타',
};

/** DropDown 옵션 목록으로 가져오기*/
export const entrySourceDropDownOptions: DropDownOption<EntrySourceEnum>[] = Object.entries(EntrySourceMap).map(
  ([key, value]) => {
    return {
      value: key,
      label: value,
    } as DropDownOption<EntrySourceEnum>;
  },
);
