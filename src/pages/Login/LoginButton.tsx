import React from 'react'

interface LoginButtonProps {
  styling?: string;
  children?: React.ReactNode;
}
export const LoginButton = ({ styling, children }: LoginButtonProps) => {
  return (
    <div className={styling}>{children}</div>
  )
}
