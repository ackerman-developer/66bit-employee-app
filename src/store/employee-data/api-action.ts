import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { APIRoute } from "../../const";
import { AppDispatch, RootState } from "../../types/store";
import { EmployeeData } from "../../types/employee-data";

export const fetchEmployees = createAsyncThunk<EmployeeData[], undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchEmployees',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<EmployeeData[]>(APIRoute.emloyees)
    return data
  },
)

export const fetchEmployeesByID = createAsyncThunk<EmployeeData[], {id: string}, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchEmployeesByID',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<EmployeeData[]>(`${APIRoute.emloyees}/${id}`)
    return data
  },
)
