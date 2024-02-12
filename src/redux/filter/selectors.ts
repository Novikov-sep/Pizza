import { RootState } from "../store";

export const selectFilterItem = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;