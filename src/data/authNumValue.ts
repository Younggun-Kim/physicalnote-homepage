import RegUtils from '@/utils/regUtils';

/// 인증번호 VO
export class AuthNumValue {
  constructor(private readonly value: string = '') {}

  static empty(): AuthNumValue {
    return new AuthNumValue();
  }

  public getValue = (): string => {
    return this.value;
  };

  public equals(other: AuthNumValue): boolean {
    return this.value === other.value;
  }

  public isValid = (): boolean => {
    return RegUtils.authNumMatch(this.value);
  };
}

export default AuthNumValue;
