'use client';

import { PricingTable } from '@clerk/nextjs';

export default function SubscriptionsPage() {
  return (
    <main className='wrapper container clerk-subscriptions'>
      <div className='mx-auto max-w-4xl text-center mb-12'>
        <p className='text-sm tracking-[0.24em] uppercase text-[#663820] font-semibold mb-4'>
          Subscription plans
        </p>
        <h1 className='text-4xl sm:text-5xl font-serif font-bold text-[#212a3b] mb-4'>
          Choose the plan that fits your reading journey.
        </h1>
        <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
          Unlock more books, longer voice sessions, and session history with a
          plan designed for your needs.
        </p>
      </div>

      <section className='mx-auto w-full max-w-6xl rounded-[32px] border border-[var(--border-subtle)] bg-[var(--accent-light)] p-6 shadow-soft-lg'>
        <PricingTable />
      </section>
    </main>
  );
}
