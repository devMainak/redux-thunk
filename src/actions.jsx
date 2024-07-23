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

