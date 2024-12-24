// utils/storage.ts
import { CoachInfoResponseDto } from '@/api/dto/coach/info/CoachInfoResponseDto';

class CoachStorage {
  private static readonly STORAGE_KEY = 'coach_info';

  static get(): CoachInfoResponseDto | undefined {
    if (typeof window === 'undefined') return undefined;

    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return undefined;

    try {
      return JSON.parse(stored);
    } catch {
      return undefined;
    }
  }

  static set(coachInfo: CoachInfoResponseDto): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(coachInfo));
  }

  static remove(): void {
    if (typeof window == 'undefined') return;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  static exists(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(this.STORAGE_KEY) !== undefined;
  }

  static update(partialInfo: Partial<CoachInfoResponseDto>): void {
    const currentInfo = this.get();
    if (currentInfo) {
      this.set({ ...currentInfo, ...partialInfo });
    }
  }
}

export default CoachStorage;
