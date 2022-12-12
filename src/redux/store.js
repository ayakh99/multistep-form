import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import planReducer from './planSlice';
import addonsReducer from './addonSlice';

export default configureStore({
  reducer: {
    form: formReducer,
    plans: planReducer,
    addons: addonsReducer,
  },
});
