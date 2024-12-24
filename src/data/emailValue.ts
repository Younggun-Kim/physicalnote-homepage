import RegUtils from '@/utils/regUtils';

export class EmailValue {
  constructor(private readonly value: string = '') {}

  static empty(): EmailValue {
    return new EmailValue();
  }

  public getValue = (): string => {
    return this.value;
  };

  public equals(other: EmailValue): boolean {
    return this.value === other.value;
  }

  public isValid = (): boolean => {
    return RegUtils.emailMatch(this.value);
  };
}

export default EmailValue;
