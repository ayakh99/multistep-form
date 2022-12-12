import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {},
  plan: {},
  addons: {},
  frequency: 'mo',
  step: 1,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateInfo: (state, action) => {
      state.info = action.payload;
    },

    updatePlan: (state, action) => {
      state.plan = action.payload;
    },

    updateAddons: (state, action) => {
      state.addons = action.payload;
    },

    updateFrequency: (state) => {
      state.frequency = state.frequency === 'yr' ? 'mo' : 'yr';
    },

    setStep: (state, action) => {
      state.step = action.payload;
    },

    nextStep: (state) => {
      if (state.step < 5) state.step += 1;
    },

    previousStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
  },
});

export default formSlice.reducer;
export const {
  updateInfo,
  updatePlan,
  updateAddons,
  updateFrequency,
  setStep,
  nextStep,
  previousStep,
} = formSlice.actions;

export const selectBillingFrequency = (state) => state.form.frequency;
export const selectFormStep = (state) => state.form.step;
export const selectPersonalInfo = (state) => state.form.info;
export const selectChosenPlan = (state) => state.form.plan;
export const selectChosenAddons = (state) => state.form.addons;
