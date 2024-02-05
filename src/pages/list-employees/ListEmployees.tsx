import TableEmpoyees from "../../components/table-employees/TableEmployees";
import styles from './ListEmployees.module.scss'

export default function ListEmployees() {
  return(
    <div className={styles.container}>
      <TableEmpoyees />
    </div>
  )
}
