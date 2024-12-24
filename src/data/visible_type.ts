export type VisibleType = 'none' | 'visible' | 'invisible';

export class VisibleValue {
  constructor(private readonly value: VisibleType) {}

  static none(): VisibleValue {
    return new VisibleValue('none');
  }

  static visible(): VisibleValue {
    return new VisibleValue('visible');
  }

  static invisible(): VisibleValue {
    return new VisibleValue('invisible');
  }

  private getValue = (): string => {
    return this.value;
  };

  public equals(other: VisibleValue): boolean {
    return this.value === other.value;
  }

  isNone(): boolean {
    return this.value == 'none';
  }

  isVisible(): boolean {
    return this.value == 'visible';
  }

  isInvisible(): boolean {
    return this.value == 'invisible';
  }
}

export default VisibleValue;
