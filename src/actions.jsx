export const addEntry = (entry) => async (dispatch) => {
  try {
    const response = await fetch("https://finance-app-backend-student-neog.replit.app/add-income", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(entry)
    })

    const data = await response.json()
    if (data.success === true) {
      dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data})
    }
  } catch (error) {
    console.error("Error adding entry", error)
  }
}

export const fetchIncome = () => async (dispatch) => {
  try {
    const response = await fetch("https://finance-app-backend-student-neog.replit.app/income")

    const data = await response.json()
    if ( data) {
      dispatch({type: "FETCH_INCOME_SUCCESS", payload: data})
    }
  } catch (error) {
    console.log("Error fetching income", error)
  }
}

export const fetchExpenses = () => async (dispatch) => {
  try {
    const response = await fetch("https://finance-app-backend-student-neog.replit.app/expenses")

    const data = await response.json()
    if ( data) {
      dispatch({type: "FETCH_EXPENSES_SUCCESS", payload: data})
    }
  } catch (error) {
    console.log("Error fetching expenses", error)
  }
}