// import { Link, useLocation } from 'react-router-dom'
import styles from './BreadCrumb.module.scss'
import Crumb from './crumb/Crumb'
// import Arrow from '../../assets/images/arrow.svg?react'
// import useEmployeeById from '../../hooks/employee-by-id'
// import { AppRoutes } from '../../const'

export default function BreadCrumb() {
  // const { pathname } = useLocation()
  // const employee = useEmployeeById()
  // const pathnames = pathname.split('/').filter((x) => x)
  // let breadcrumbPath = ''

  // const getTitle = () => {
  //   switch (location.pathname) {
  //     case AppRoutes.listEmployees:
  //       return "Список сотрудников"
  //     case `${AppRoutes.aboutEmployee}/${employee.id}`:
  //       return `${employee.name}`
  //   }
  // }

  return(
    <div className={styles.component}>
      <Crumb />
      {/* {pathnames.map((name, index) => {
        breadcrumbPath +=`${name}`
        const isLast = index===pathnames.length-1
        return isLast? <span>{name}</span>:(
          <>
            <Arrow />
            <Link to={breadcrumbPath}>{name}</Link>
          </>
        )
      })} */}
    </div>
  )
}
