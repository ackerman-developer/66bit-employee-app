import styles from './Crumb.module.scss'
import Arrow from '../../../assets/images/arrow.svg?react'
import { Link } from 'react-router-dom'

export default function Crumb() {

  return(
    <div className={styles.crumb}>
      <Link to='/'>Главная</Link>
      <Arrow />
      <Link to='/'>Список сотрудников</Link>
    </div>
  )
}
