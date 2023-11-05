import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

import { baseApi } from 'shared/api';

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

declare global {
  type RootState = ReturnType<typeof appStore.getState>;
  type AppDispatch = typeof appStore.dispatch;
}
