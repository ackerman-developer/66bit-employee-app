export type EmployeeData = {
  id: number | string,
  name: string,
  photo: string,
  phone: number,
  gender: string,
  position: string,
  stack: string[],
  birthdate: string,
  dateOfEmployment: string
}

export type EmployeesState = {
  employees: EmployeeData[],
  employee?: EmployeeData,
  isEmployeeDataLoading: boolean,
  isEmployeesDataLoading: boolean
}
