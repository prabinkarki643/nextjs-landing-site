import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "../features/global/globalSlice";
import { siteReducer } from "../features/site/siteSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    global: globalReducer,
    site: siteReducer
  },
  devTools: true,
});
export const makeStore = () => store;

export type RootStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<RootStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper<any>(makeStore);
