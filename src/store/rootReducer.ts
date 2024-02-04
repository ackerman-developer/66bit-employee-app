import { combineReducers } from "@reduxjs/toolkit";
import { emloyeesData } from "./employee-data/employee-data.slice";

export const rootReducer = combineReducers({
  'employees': emloyeesData.reducer,
})
