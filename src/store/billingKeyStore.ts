import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import GetBillingKeysResponseDto from '@/networks/dto/payment/GetBillingKeysResponseDto';

interface State {
  billingKey: GetBillingKeysResponseDto[];
  defaultBillingKey: GetBillingKeysResponseDto | null;
}

const initialState: State = {
  billingKey: [],
  defaultBillingKey: null,
};

type Store = {
  state: State;
  actions: {
    setBillingKey: (data: GetBillingKeysResponseDto[]) => void;
  };
};

/**
 * 빌링키 Store
 */
export const useBillingKeyStore = create(
  immer<Store>((set) => ({
    state: initialState,
    actions: {
      setBillingKey: (billingKey: GetBillingKeysResponseDto[]) => {
        set((store) => {
          store.state.billingKey = billingKey;
          store.state.defaultBillingKey = billingKey.find((key) => key.isDefault) || null;
        });
      },
    },
  })),
);

export default useBillingKeyStore;
