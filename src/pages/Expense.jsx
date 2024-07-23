import { useSelector, useDispatch } from 'react-redux'
import { fetchExpenses } from '../actions'
import { useEffect } from 'react'

const Expense = () => {
  const dispatch = useDispatch()
  const expenses = useSelector((state) => state.expenses)

  useEffect(() => {
    dispatch(fetchExpenses())
  }, [])

  const totalExpense = expenses.reduce((acc, curr) => {
    acc += curr.amount
    return acc
  }, 0)

  return (
    <div>
      <h1>Expense Page</h1>
      <ul>
        {expenses.map((expense, index) => (
      <li key={index}>
        {expense.description}: ${expense.amount}
      </li>
        ))}
      </ul>
      <h2>Expenses Total: ${totalExpense}</h2>

    </div>
  )
}

export default Expense