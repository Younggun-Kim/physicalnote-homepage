import { GenderEnum } from '@/types';

export class GenderValue {
  constructor(private readonly value: GenderEnum = 'NONE') {}

  getValue = (): string => {
    return this.value;
  };

  equals(other: GenderValue): boolean {
    return this.value === other.value;
  }

  static none(): GenderValue {
    return new GenderValue('NONE');
  }

  static male(): GenderValue {
    return new GenderValue('M');
  }

  static female(): GenderValue {
    return new GenderValue('F');
  }

  isNone: boolean = this.value === 'NONE';
  isMale: boolean = this.value === 'M';
  isFemale: boolean = this.value === 'F';
}

export default GenderValue;
