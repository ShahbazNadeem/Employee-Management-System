import React from 'react'
import Header from '../UI/Header'
import CreateTask from '../UI/CreateTask'

const AdminDashboard = () => {
    return (
        <div className='p-10 h-screen'>
            <Header />
            <CreateTask />

        </div>
    )
}

export default AdminDashboard