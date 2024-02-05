import { useAppSelector } from "../../hooks/redux-hooks"
import useEmployeeById from "../../hooks/useEmployeeById"
import { getEmployeeDataLoadingStatus } from "../../store/employee-data/employee-data.selector"
import styles from './AboutEmployee.module.scss'

export default function AboutEmployee() {
  const employee = useEmployeeById()
  const isEmployeeDataLoading = useAppSelector(getEmployeeDataLoadingStatus)

  return(
    <div className={styles.container}>
      {employee && !isEmployeeDataLoading ?
        <>
          <div className={styles.first_block}>
            <img src={employee.photo} alt={employee.name} />
            <div className={styles.text}>
              <h1>{employee.name}</h1>
              <p>{employee.position}</p>
              <ul>
                {employee.stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <h2>Основная информация</h2>
          <div className={styles.second_block}>
            <div className={styles.headers}>
              <p>Контактный телефон:</p>
              <p>Дата рождения:</p>
              <p>Дата устройства:</p>
            </div>
            <div className={styles.data}>
              <p>{employee.phone}</p>
              <p>{employee.birthdate}</p>
              <p>{employee.dateOfEmployment}</p>
            </div>
          </div>
        </>
      :
        <p>Сотрудник не найден</p>
      }
    </div>
  )
}
