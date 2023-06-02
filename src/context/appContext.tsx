import React from "react";


export interface InitialAppContextData{
  homePageData: Record<string, any>;
  siteSettings: Record<string, any>;
}
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const AppContext: React.Context<InitialAppContextData> = React.createContext({
  homePageData: {},
  siteSettings: {},
});
