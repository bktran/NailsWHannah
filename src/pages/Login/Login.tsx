import React from 'react'
interface LoginProps {
  styling?: string;
}

const Login: React.FC<LoginProps> = ({ styling }: LoginProps) => {

  return (
    <div className={`${styling}`} >
      <form action="" name='login' className='flex gap-2'>
        <label htmlFor="email">Email</label>
        <input placeholder='Enter Email' type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input placeholder='Enter Password' type="password" id="password" name="password" />
        <button className='border-2 rounded-md bg-gray-200' type="submit">Sign in</button>
      </form>
    </div >

  )
}

export default Login;
