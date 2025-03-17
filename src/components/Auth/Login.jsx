import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex items-center justify-center h-screen '>
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
          <input required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-grey-400' type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />

          <input required className='mt-4 outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-grey-400' type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className='text-white mt-5 outline-none border-none bg-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-white' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login