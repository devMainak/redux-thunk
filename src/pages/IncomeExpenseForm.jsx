const IncomeExpenseForm = () => {
  return (
    <div>
      <h1>New Entry Page</h1>
      <form>
        <label for="descriptionn">Description:</label>
        <br/>
        <input id="description" type="text"/>
        <br/><br/>
        <label htmlFor="amount">Amount:</label>
        <br/>
        <input id="amount" type="number"/>
        <br/><br/>
        <label htmlFor="entryType">Entry Type:</label>
        <br/>
        <select id="entryType">
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