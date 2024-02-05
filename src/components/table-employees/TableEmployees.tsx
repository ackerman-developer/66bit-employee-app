import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { fetchEmployees } from "../../store/employee-data/api-action"
import { getFilms } from "../../store/employee-data/employee-data.selector"
import { Link } from "react-router-dom"
import { AppRoutes } from "../../const"
import styles from './TableEmployees.module.scss'

export default function TableEmpoyees() {
  const dispatch = useAppDispatch()
  const employees = useAppSelector(getFilms)

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return(
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Должность</th>
          <th>Телефон</th>
          <th>Дата рождения</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) =>
          <tr key={employee.id}>
            <td><Link to={`${AppRoutes.aboutEmployee}/${employee.id}`}>{employee.name}</Link></td>
            <td>{employee.position}</td>
            <td>{employee.phone}</td>
            <td>{employee.birthdate}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
