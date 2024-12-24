import RegUtils from '@/utils/regUtils';

export class PasswordValue {
  constructor(private readonly value: string) {}

  static empty(): PasswordValue {
    return new PasswordValue('');
  }

  getValue = (): string => {
    return this.value;
  };

  public equals(other: PasswordValue): boolean {
    return this.value === other.value;
  }

  public isValid = (): boolean => {
    return RegUtils.passwordMatch(this.value);
  };
}

export default PasswordValue;
