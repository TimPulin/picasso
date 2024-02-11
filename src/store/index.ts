import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postApi } from '../connect/post-api';

const rootReducer = combineReducers({
  [postApi.reducerPath]:postApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
