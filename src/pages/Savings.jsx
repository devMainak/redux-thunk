import { useSelector, useDispatch } from 'react-redux'
import { fetchIncome, fetchExpenses } from '../actions'
import { useEffect } from 'react'

const Savings = () => {
  const dispatch = useDispatch()
  const income = useSelector((state) => state.income)
  const expenses = useSelector((state) => state.expenses)
  console.log(expenses)

  const totalIncome = income.reduce((acc, curr) => curr.amount + acc, 0)
  const totalExpenses = expenses.reduce((acc, curr) => curr.amount + acc, 0)
  
  useEffect(() => {
    dispatch(fetchIncome)
  }, [])

  useEffect(() => {
    dispatch(fetchExpenses)
  }, [])
  
  return (
    <div></div>
  )
}

export default Savings