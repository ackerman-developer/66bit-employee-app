import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import BreadCrumb from "../bread-crumb/BreadCrumd";
import styles from './Layout.module.scss'

export default function Layout(){
  return(
    <>
      <Header />
      <div className={styles.container}>
        <BreadCrumb />
        <Outlet />
      </div>
    </>
  )
}
