import React from 'react'
import Header from './../UI/Header';
import TaskNumbers from './../UI/TaskNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header/>
        <TaskNumbers/>
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard