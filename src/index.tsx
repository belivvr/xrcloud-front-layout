import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Layout ({ children }: Props): JSX.Element {
  return (
    <>
      {children}
    </>
  )
}
