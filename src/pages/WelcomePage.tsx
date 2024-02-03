import React from 'react'
import Login from './Login/Login'
import { Link } from 'react-router-dom'


const WelcomePage: React.FC = () => {
  const links = [
    {
      name: 'Hannah',
      link: '/hannah',
    }
  ]
  return (
    <div className='flex flex-col'>
      <Login styling='ml-auto mr-8 mt-4' />
      <h1 className='text-center mt-4 text-[4rem]'>Tori Nails </h1>
      {links.map(link => {
        return (
          <Link to={link.link} key={link.name} className='text-center text-2xl mt-4'>{link.name}'s Work</Link>
        )
      })}
    </div>
  )
}

export default WelcomePage