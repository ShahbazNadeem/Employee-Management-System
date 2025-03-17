import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [logedInUserData, setLogedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     // setUser(loggedInUser.role)
  //   }

  // }, [authData])


  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (authData?.employees) {
      const employee = authData.employees.find(({ email: eEmail, password: ePassword }) => 
        eEmail === email && ePassword === password
      );
    
      employee && (setUser("employee"), localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" })));
    }
    
     else {
      alert("Invalid credentials");
    }
  };


  return (
    <div className="customContainer">
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </div>
  );
};

export default App;
