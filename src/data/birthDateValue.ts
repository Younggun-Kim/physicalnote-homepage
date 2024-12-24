import RegUtils from '@/utils/regUtils';
import { yyyyMMddAddDash } from '@/utils/dateUtils';

/**
 * 생년월일 VO
 * 생년월일은 YYYYMMdd형식으로 입력하기
 * */
export class BirthDateValue {
  constructor(private readonly value: string) {}

  static empty(): BirthDateValue {
    return new BirthDateValue('');
  }

  public getValue = (): string => {
    return this.value;
  };

  public getDashValue = (): string => {
    return yyyyMMddAddDash(this.value);
  };

  public equals(other: BirthDateValue): boolean {
    return this.value === other.value;
  }

  public isValid = (): boolean => {
    return RegUtils.birthDateMatch(this.value);
  };
}

export default BirthDateValue;
