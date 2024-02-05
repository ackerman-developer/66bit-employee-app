import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux-hooks';
import { fetchEmployeesByID } from '../store/employee-data/api-action';
import { getEmloyee } from '../store/employee-data/employee-data.selector';
import { EmployeeData } from '../types/employee-data';

export default function useEmployeeById() {
  const {id} = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchEmployeesByID({id: id}))
    }
  }, [dispatch, id])

  const employee = useAppSelector(getEmloyee) as EmployeeData

  return employee
}
