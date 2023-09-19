import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reportsReducer from "../reducers/reportsReducer";

export const store = configureStore({
  reducer: {
    reportsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
