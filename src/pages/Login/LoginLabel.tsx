import React from 'react'

interface LoginLabelProps {
  styling?: string;
  children?: React.ReactNode;
}
export const LoginLabel = ({ styling, children }: LoginLabelProps) => {
  return (
    <div className={styling}>{children}</div>
  )
}
