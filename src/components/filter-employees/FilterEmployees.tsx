import styles from './FilterEmployees.module.scss'
import DownIcon from '../../assets/images/down.svg?react'
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getFilms } from '../../store/employee-data/employee-data.selector';

export default function FilterEmployees({handleSearchChange, searchQuery, selectedPosition, setSelectedPosition}: any) {
   const [isDropdownOpen, setDropdownOpen] = useState(false);
   const employees = useAppSelector(getFilms)
   const positions = Array.from(new Set(employees.map((employee) => employee.position)))

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   }

  return(
    <form className={styles.filter} onSubmit={handleSubmit}>
      <div className={styles.params}>
        <h1>Список сотрудников</h1>
        <div className={styles.selection}>
          <label htmlFor="positions">Должность:</label>
          <div className={styles.dropdown}>
            <div
              className={`${styles.dropdownTrigger} ${isDropdownOpen ? styles.open : ''}`}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <DownIcon />
            </div>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                {positions.map((position) => (
                  <div key={position} >
                    <label htmlFor={position}>{position}</label>
                    <input
                      type="checkbox"
                      id={position}
                      name="position"
                      value={position}
                      checked={selectedPosition === position}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.search}>
        <input type="search" placeholder="Поиск" value={searchQuery} onChange={handleSearchChange} />
      </div>
      <button type="submit">Найти</button>
    </form>
  )
}
