import { auth } from '@clerk/nextjs/server';
import { PLANS, PlanType } from '@/lib/subscription-constants';

export const getCurrentPlan = async (): Promise<PlanType> => {
  const { has, userId } = await auth();

  if (!userId) {
    return PLANS.FREE;
  }

  if (has({ product: 'pro' }) || has({ plan: 'pro' })) {
    return PLANS.PRO;
  }

  if (has({ product: 'standard' }) || has({ plan: 'standard' })) {
    return PLANS.STANDARD;
  }

  return PLANS.FREE;
};

export const isPro = async (): Promise<boolean> => {
  return (await getCurrentPlan()) === PLANS.PRO;
};

export const isStandard = async (): Promise<boolean> => {
  return (await getCurrentPlan()) === PLANS.STANDARD;
};

export const isFree = async (): Promise<boolean> => {
  return (await getCurrentPlan()) === PLANS.FREE;
};
