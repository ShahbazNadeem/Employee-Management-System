import React from 'react'

const CreateTask = () => {
    return (
        <div className="p-5 mt-5 bg-[#1c1c1c] rounded">
            <form className='flex flex-col md:flex-row md:flex-start md:justify-between flex-wrap w-full'>

                <div className="md:w-1/2 flex flex-col md:flex-col gap-3 justify-center px-5 md:px-0">
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to </h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Design, Dev etc' />
                    </div>
                </div>

                <div className="md:w-1/2 w-full px-5 md:px-0 mt-2 md:mt-0">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea name="" id="" className='md:w-full sm:w-full w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <div className="flex justify-center">
                        <button className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 md:w-full w-1/2 transition-all duration-300 ease-in-out'>Create Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask