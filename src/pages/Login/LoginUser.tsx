import React, { Children } from 'react'

interface LoginUserProps {
  styling?: string;
  children?: React.ReactNode;
}

export const LoginUser = ({ styling, children }: LoginUserProps,) => {
  return (
    <input placeholder={children} />
  )
}
