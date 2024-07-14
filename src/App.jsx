import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import IncomeExpenseForm from './pages/IncomeExpenseForm'
import Income from './pages/Income'
import './App.css'
import Expense from './pages/Expense'
import Savings from './pages/Savings'

export default function App() {
  return (
    <>
      <Router>
      <nav>
        <ul>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/expense">Expense</Link>
          </li>
          <li>
            <Link to="/savings">Savings</Link>
          </li>
          <li>
            <Link to="/">New Entries</Link>
          </li>
        </ul>
      </nav>
        
        <Routes>
          <Route path="/" element={<IncomeExpenseForm/>} />
          <Route path="/income" element={<Income/>} />
          <Route path="/expense" element={<Expense/>}/>
          <Route path="/savings" element={<Savings/>} />
        </Routes>
        </Router>
    </>
  )
}
