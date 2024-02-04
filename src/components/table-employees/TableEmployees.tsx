import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { fetchEmployees } from "../../store/employee-data/api-action"
import { AppRoutes } from "../../const"
import { Link } from "react-router-dom"

export default function TableEmpoyees() {
  const dispatch = useAppDispatch()
  const employees = useAppSelector((state) => state.employees.employees)

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return(
    <>
      {employees.map((employee) =>
        <h1 key={employee.id}>
          <p>{employee.name}</p>
          <img src={employee.photo} alt=""/>
          <p>{employee.phone}</p>
          <p>{employee.gender}</p>
          <p>{employee.position}</p>
          <p>{employee.stack}</p>
          <p>{employee.birthdate}</p>
          <p>{employee.dateOfEmployment}</p>
          <Link to={`${AppRoutes.aboutEmployee}/${employee.id}`}>сотрудник</Link>
        </h1>
      )}
    </>
  )
}
