import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      console.log("this is admin")
    } else if (email == "employee1@example.com" && password == "123") {
      alert("this is user")
    } else alert("invalid credentials")
  }

  handleLogin("admin@example.com", 123)

  return (
    <div className='costomizecostomizeContainer'>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App