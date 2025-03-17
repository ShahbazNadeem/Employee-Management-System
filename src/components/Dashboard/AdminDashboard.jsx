import React from 'react'
import Header from '../UI/Header'
import CreateTask from '../UI/CreateTask'
import AllTask from '../UI/AllTask'

const AdminDashboard = () => {
    return (
        <div className='p-10 h-screen'>
            <Header />
            <CreateTask />
            <AllTask />

        </div>
    )
}

export default AdminDashboard