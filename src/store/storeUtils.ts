import useCoachInfoStore from '@/store/coachInfoStore';
import usePlanStore from '@/store/plansStore';
import useSubscriptionStore from '@/store/subscriptionStore';
import useAppStore from '@/store/appStore';
import useBillingKeyStore from '@/store/billingKeyStore';
import useLoginStore from '@/store/loginStore';
import useProfileEditStore from '@/store/profileEditStore';
import useSignupStore from '@/store/signupStore';
import useTeamEditStore from '@/store/teamEditStore';

export const resetStore = () => {
  useAppStore.getState().actions.onLogout();
  useAppStore.getState().actions.reset();
  useBillingKeyStore.getState().actions.reset();
  useCoachInfoStore.getState().actions.reset();
  useLoginStore.getState().actions.resetState();
  usePlanStore.getState().actions.reset();
  useProfileEditStore.getState().actions.resetState();
  useSignupStore.getState().actions.resetState();
  useSubscriptionStore.getState().actions.resetState();
  useTeamEditStore.getState().actions.resetState();
};
