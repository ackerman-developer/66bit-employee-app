import { Link, useParams, useLocation } from 'react-router-dom'
import styles from './BreadCrumb.module.scss'
import Arrow from '../../assets/images/arrow.svg?react'
import useEmployeeById from '../../hooks/useEmployeeById'
import { AppRoutes } from '../../const'

export default function BreadCrumb() {
  const { id } = useParams()
  const location = useLocation()
  const employee = useEmployeeById()

  const isEmployeeDetailsPage = location.pathname.startsWith(`${AppRoutes.aboutEmployee}/${id}`)

  return (
    <div className={styles.component}>
      <Link to='/'>Главная</Link>
      <Arrow />
      <Link to='/'>Список сотрудников</Link>
      {isEmployeeDetailsPage && employee &&
        <>
          <Arrow />
          <p>{employee.name}</p>
        </>
      }
    </div>
  )
}
