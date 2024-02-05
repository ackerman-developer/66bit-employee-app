import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { fetchEmployees } from "../../store/employee-data/api-action"
import { getFilms } from "../../store/employee-data/employee-data.selector"
import { Link } from "react-router-dom"
import { AppRoutes } from "../../const"
import styles from './TableEmployees.module.scss'
import FilterEmployees from "../filter-employees/FilterEmployees"
import DeleteIcon from '../../assets/images/delete.svg?react'

export default function TableEmpoyees() {
  const dispatch = useAppDispatch()
  const employees = useAppSelector(getFilms)
  const [selectedPosition, setSelectedPosition] = useState('')
  const [selectedStack, setSelectedStack] = useState('')
  const [selectedGender, setSelectedGender] = useState('')
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  const uniqueStacks = new Set(employees.flatMap((employee) => Array.isArray(employee.stack) ? employee.stack : []))

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedPosition === '' || employee.position.toLowerCase().includes(selectedPosition.toLowerCase())) &&
    (selectedStack === '' || selectedStack === 'all' || (Array.isArray(employee.stack) && employee.stack.includes(selectedStack))) &&
    (selectedGender === '' || employee.gender.toLowerCase().includes(selectedGender.toLowerCase()))
  )

  const positions = Array.from(new Set(employees.map((employee) => employee.position)))
  const genders = Array.from(new Set(employees.map((employee) => employee.gender)))


  return(
    <>
      <div className={styles.filter}>
        <h1>Список сотрудников</h1>
        <div>
          <label>Должность:</label>
          <select value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)}>
            <option value="">Все</option>
            {positions.map((position) => (
              <option key={position} value={position}>{position}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Stack:</label>
          <select value={selectedStack} onChange={(e) => setSelectedStack(e.target.value)}>
            <option value="all">Все</option>
            {[...uniqueStacks].map((stack) => (
              <option key={stack} value={stack}>{stack}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Пол:</label>
          <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
            <option value="">Все</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
      </div>
      <FilterEmployees searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
      <div className={styles.selected_filter}>
        <h1>Выбранные фильтры</h1>
        {selectedPosition && (
          <div className={styles.selected}>
            <button onClick={() => setSelectedPosition('')}><DeleteIcon /></button>
            <span>{selectedPosition}</span>
          </div>
        )}
        {selectedStack && selectedStack !== 'all' && (
          <div className={styles.selected}>
            <button onClick={() => setSelectedStack('')}><DeleteIcon /></button>
            <span>{selectedStack}</span>
          </div>
        )}
        {selectedGender && (
          <div className={styles.selected}>
            <button onClick={() => setSelectedGender('')}><DeleteIcon /></button>
            <span>{selectedGender}</span>
          </div>
        )}
      </div>

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
          {filteredEmployees.length === 0 ? (
            <tr>
              <td colSpan={4}>Ничего не найдено</td>
            </tr>
          ) : (
            filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td><Link to={`${AppRoutes.aboutEmployee}/${employee.id}`}>{employee.name}</Link></td>
                <td>{employee.position}</td>
                <td>{employee.phone}</td>
                <td>{employee.birthdate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  )
}
