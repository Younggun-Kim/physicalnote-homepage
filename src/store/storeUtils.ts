import useCoachInfoStore from '@/store/coachInfoStore';
import usePlanStore from '@/store/plansStore';
import useSubscriptionStore from '@/store/subscriptionStore';
import useAppStore from '@/store/appStore';
import useBillingKeyStore from '@/store/billingKeyStore';
import useLoginStore from '@/store/loginStore';
import useProfileEditStore from '@/store/profileEditStore';
import useTeamEditStore from '@/store/teamEditStore';
import useFindAccountModalStore from '@/store/modal/findAccountModalStore';

export const resetStore = () => {
  useAppStore.getState().actions.onLogout();
  useAppStore.getState().actions.reset();
  useBillingKeyStore.getState().actions.reset();
  useCoachInfoStore.getState().actions.reset();
  useLoginStore.getState().actions.resetState();
  usePlanStore.getState().actions.reset();
  useProfileEditStore.getState().actions.resetState();
  useSubscriptionStore.getState().actions.resetState();
  useTeamEditStore.getState().actions.resetState();

  useFindAccountModalStore.getState().actions.resetState();
};
