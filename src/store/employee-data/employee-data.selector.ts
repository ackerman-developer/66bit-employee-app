import { EmployeeData } from "../../types/employee-data";
import { RootState } from "../../types/store";

export const getFilms = (state: Pick<RootState, 'employees'>): EmployeeData[] => state.employees.employees
export const getFilmsDataLoadingStatus = (state: Pick<RootState, 'employees'>): boolean => state.employees.isEmployeesDataLoading
export const getEmloyee = (state: Pick<RootState, 'employees'>): EmployeeData | undefined => state.employees.employee
export const getEmployeeDataLoadingStatus = (state: Pick<RootState, 'employees'>): boolean => state.employees.isEmployeeDataLoading
