import { createSlice } from "@reduxjs/toolkit";
import { EmployeesState } from "../../types/employee-data";
import { fetchEmployees, fetchEmployeesByID } from "./api-action";

const initialState: EmployeesState = {
  employees: [],
  isEmployeesDataLoading: false
}

export const emloyeesData = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isEmployeesDataLoading = true
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload
        state.isEmployeesDataLoading = false
      })
      .addCase(fetchEmployeesByID.fulfilled, (state, action) => {
        state.employees = state.employees.concat(action.payload)
      })
  }
})
