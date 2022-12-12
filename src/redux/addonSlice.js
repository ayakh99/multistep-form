import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  addons: [
    {
      id: 'online',
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: {
        mo: 1,
        yr: 10,
      },
    },
    {
      id: 'storage',
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: {
        mo: 2,
        yr: 20,
      },
    },
    {
      id: 'theme',
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: {
        mo: 2,
        yr: 20,
      },
    },
  ],
};

export const addonSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {},
});

export default addonSlice.reducer;

const selectAllAddons = (state) => state.addons.addons;

export const selectAddons = createSelector(
  [selectAllAddons, (state, frequency) => frequency],
  (addons, frequency) =>
    addons.map((addon) => ({
      ...addon,
      price: addon.price[frequency],
    }))
);
