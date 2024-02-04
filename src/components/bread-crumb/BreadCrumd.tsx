import { Link } from 'react-router-dom'
import styles from './BreadCrumb.module.scss'
import { AppRoutes } from '../../const'
import Arrow from '../../assets/images/arrow.svg?react'

export default function BreadCrumb() {
  return(
    <div className={styles.component}>
      <Link to={AppRoutes.listEmployees}>Главная</Link>
      <Arrow />
      <Link to={AppRoutes.listEmployees}>Список сотрудников</Link>
    </div>
  )
}
