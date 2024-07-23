import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../actions'

const IncomeExpenseForm = () => {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const [entryType, setEntryType] = useState("income")
  const dispatch = useDispatch()
  
  const handleAddEntry = (e) => {
    e.preventDefault()
    dispatch(addEntry({ description, amount: parseFloat(amount), entryType}))
    setDescription("")
    setAmount(0)
    setEntryType("income")
  }
  
  return (
    <div>
      <h1>New Entry Page</h1>
      <form onSubmit={handleAddEntry}>
        <label htmlFor="description">Description:</label>
        <br/>
        <input onChange={(e) => setDescription(e.target.value)} value={description} id="description" type="text"/>
        <br/><br/>
        <label htmlFor="amount">Amount:</label>
        <br/>
        <input onChange={(e) => setAmount(e.target.value)} value={amount} id="amount" type="number"/>
        <br/><br/>
        <label htmlFor="entryType">Entry Type:</label>
        <br/>
        <select onChange={(e) => setEntryType(e.target.value)} value={entryType} id="entryType">
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <br/><br/>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  )
}

export default IncomeExpenseForm