import styles from './FilterEmployees.module.scss'

export default function FilterEmployees({handleSearchChange, searchQuery}: any) {
  return(
    <form className={styles.form}>
      <input type="search" placeholder="Поиск" value={searchQuery} onChange={handleSearchChange} />
      <button type="submit">Найти</button>
    </form>
  )
}
