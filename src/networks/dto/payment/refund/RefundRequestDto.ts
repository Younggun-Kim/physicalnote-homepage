import { CancelType } from '@/types/cancelType';

export default interface RefundRequestDto {
  customerKey: string;
  cancelReason: CancelType;
}
