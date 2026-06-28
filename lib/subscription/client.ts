'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { PLANS, PlanType } from '@/lib/subscription-constants';

export const useSubscriptionPlan = () => {
  const { has, isLoaded: authLoaded } = useAuth();
  const { user, isLoaded: userLoaded } = useUser();
  const isLoaded = authLoaded && userLoaded;

  const getCurrentPlan = (): PlanType => {
    if (!isLoaded) {
      return PLANS.FREE;
    }

    if (has?.({ product: 'pro' }) || has?.({ plan: 'pro' })) {
      return PLANS.PRO;
    }

    if (has?.({ product: 'standard' }) || has?.({ plan: 'standard' })) {
      return PLANS.STANDARD;
    }

    const metadataPlan = (
      user?.publicMetadata?.plan || user?.publicMetadata?.billingPlan
    )
      ?.toString()
      .toLowerCase();

    if (metadataPlan === 'pro') {
      return PLANS.PRO;
    }

    if (metadataPlan === 'standard') {
      return PLANS.STANDARD;
    }

    return PLANS.FREE;
  };

  const plan = getCurrentPlan();

  return {
    plan,
    isPro: plan === PLANS.PRO,
    isStandard: plan === PLANS.STANDARD,
    isFree: plan === PLANS.FREE,
    isLoaded,
  };
};
