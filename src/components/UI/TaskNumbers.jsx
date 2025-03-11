import React from 'react'

const TaskNumbers = () => {
    return (
        <div className='flex justify-center items-center flex-wrap gap-3 mt-5'>
            <div className="lg:px-6 lg:py-5 px-3 py-2 rounded-xl bg-blue-400 basis-[45%] md:basis-[33%] lg:basis-auto">
                <h2 className='md:text-3xl text-xl font-medium '>0</h2>
                <h3 className='md:text-xl text-md font-semibold'>New Task</h3>
            </div>
            <div className="lg:px-6 lg:py-5 px-3 py-2 rounded-xl bg-red-400 basis-[45%] md:basis-[33%] lg:basis-auto">
                <h2 className='md:text-3xl text-xl font-medium'>0</h2>
                <h3 className='md:text-xl text-md font-semibold'>Failed Task</h3>
            </div>
            <div className="lg:px-6 lg:py-5 px-3 py-2 rounded-xl bg-green-400 basis-[45%] md:basis-[33%] lg:basis-auto">
                <h2 className='md:text-3xl text-xl font-medium'>0</h2>
                <h3 className='md:text-xl text-md font-semibold'>Completed Task</h3>
            </div>
            <div className="lg:px-6 lg:py-5 px-3 py-2 rounded-xl bg-yellow-400 basis-[45%] md:basis-[33%] lg:basis-auto">
                <h2 className='md:text-3xl text-xl font-medium'>0</h2>
                <h3 className='md:text-xl text-md font-semibold'>Accepted Task</h3>
            </div>
        </div>
    )
}

export default TaskNumbers