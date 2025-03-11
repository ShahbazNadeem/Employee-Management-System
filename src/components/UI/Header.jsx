import React from 'react'

const Header = () => {
    return (
        <div className='flex items-end justify-between'>
            <h1 className='md:text-2xl text-xl font-medium'>Helo <br /> <span className='md:text-3xl text-2xl font-semibold'>Shahbaz 👋🏻</span></h1>
            <button className='bg-red-600 px-5 py-2 rounded text-white font-bold md:text-xl text-sm'>Logout</button>
        </div>
    )
}

export default Header