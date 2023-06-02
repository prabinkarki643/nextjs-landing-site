import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// Define a type for the slice state
export interface GlobalState {
  homePageData: Record<string, any>;
  siteSettings: Record<string, any>;
  sectionsSettings: Record<string, any>;
  services: Array<any>;
  faqs: Array<any>
}

// Define the initial state using that type
const initialState: GlobalState = {
  homePageData: {},
  siteSettings: {},
  sectionsSettings: {},
  services:[],
  faqs:[]
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setInitialState: (state, action: { payload: GlobalState }) => {
      return{
        ...state, ...action.payload
      }
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.global,
      };
    },
  },
});

// Action creators
export const { setInitialState } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
