export const SUBSCRIPTION_PLANS = {
  FREE: 'Free',
  STANDARD: 'Standard',
  PRO: 'Pro',
} as const;

export type SubscriptionPlan =
  (typeof SUBSCRIPTION_PLANS)[keyof typeof SUBSCRIPTION_PLANS];

export interface SubscriptionPlanLimits {
  maxBooks: number;
  monthlySessions: number;
  maxSessionMinutes: number;
  sessionHistory: boolean;
}

export const SUBSCRIPTION_PLAN_LIMITS: Record<
  SubscriptionPlan,
  SubscriptionPlanLimits
> = {
  [SUBSCRIPTION_PLANS.FREE]: {
    maxBooks: 1,
    monthlySessions: 5,
    maxSessionMinutes: 5,
    sessionHistory: false,
  },
  [SUBSCRIPTION_PLANS.STANDARD]: {
    maxBooks: 10,
    monthlySessions: 100,
    maxSessionMinutes: 15,
    sessionHistory: true,
  },
  [SUBSCRIPTION_PLANS.PRO]: {
    maxBooks: 100,
    monthlySessions: Infinity,
    maxSessionMinutes: 60,
    sessionHistory: true,
  },
};
