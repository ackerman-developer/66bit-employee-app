import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { fetchEmployeesByID } from "../../store/employee-data/api-action"
import { useParams } from "react-router-dom"

export default function AboutEmployee() {
  const dispatch = useAppDispatch()
  const employees = useAppSelector((state) => state.employees.employees)
  const { id } = useParams<{ id?: string }>()

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchEmployeesByID({ id }))
    }
  }, [dispatch, id])

  const employee = employees.find((employeeItem) => employeeItem.id === id)

  return(
    <>
      {employee ? (
        <>
          <p>{employee.name}</p>
          <img src={employee.photo} alt="" />
        </>
      ) : (
        <p>Сотрудник не найден</p>
      )}
    </>
  )
}
