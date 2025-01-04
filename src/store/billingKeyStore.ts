import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import GetBillingKeysResponseDto from '@/networks/dto/payment/GetBillingKeysResponseDto';

interface State {
  billingKey: GetBillingKeysResponseDto[];
  defaultBillingKey?: GetBillingKeysResponseDto;
}

const initialState: State = {
  billingKey: [],
  defaultBillingKey: undefined,
};

type Store = {
  state: State;
  actions: {
    reset: () => void;
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
      reset: () => {
        set((store) => {
          store.state.billingKey = [];
          store.state.defaultBillingKey = undefined;
        });
      },
      setBillingKey: (billingKey: GetBillingKeysResponseDto[]) => {
        set((store) => {
          store.state.billingKey = billingKey;
          store.state.defaultBillingKey = billingKey.find((key) => key.isDefault) || undefined;
        });
      },
    },
  })),
);

export default useBillingKeyStore;
