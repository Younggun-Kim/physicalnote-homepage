import RegUtils from '@/utils/regUtils';

export class PhoneValue {
  constructor(private readonly value: string = '') {}

  static empty(): PhoneValue {
    return new PhoneValue();
  }

  public getValue = (): string => {
    return this.value;
  };

  public equals(other: PhoneValue): boolean {
    return this.value === other.value;
  }

  public isValid = (): boolean => {
    return RegUtils.phoneMatch(this.value);
  };
}

export default PhoneValue;
