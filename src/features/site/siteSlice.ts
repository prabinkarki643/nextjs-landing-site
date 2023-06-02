import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import _ from 'lodash'
import { initialState } from '@/features/site/data/initialData';

// Define a type for the slice state
export interface SiteState {
  homePageData: Record<string, any>;
  siteSettings: Record<string, any>;
  sectionsSettings: Record<string, any>;
  services: Array<any>;
  faqs: Array<any>
}


export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setSiteState: (state, action: { payload: SiteState }) => {
      return  _.merge({},state,action.payload)
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.site,
      };
    },
  },
});

// Action creators
export const { setSiteState } = siteSlice.actions;

export const siteReducer = siteSlice.reducer;
