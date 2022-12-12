import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  plans: [
    {
      name: 'arcade',
      price: {
        mo: 9,
        yr: 90,
      },
    },
    {
      name: 'advanced',
      price: {
        mo: 12,
        yr: 120,
      },
    },
    {
      name: 'pro',
      price: {
        mo: 15,
        yr: 150,
      },
    },
  ],
};

export const planSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
});

export default planSlice.reducer;

const selectAllPlans = (state) => state.plans.plans;

export const selectPlans = createSelector(
  [selectAllPlans, (state, frequency) => frequency],
  (plans, frequency) => plans.map((plan) => ({ ...plan, price: plan.price[frequency] }))
);

export const selectPlanById = (state, planId) =>
  state.plans.plans.find((plan) => plan.name === planId);
