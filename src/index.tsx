import React from 'react'
import Footer from './components/Footer'

interface Props {
  children: React.ReactNode
}

export default function Layout ({ children }: Props): JSX.Element {
  return (
    <>
      {children}
      <Footer/>
    </>
  )
}
