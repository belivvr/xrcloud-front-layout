import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'

interface Props {
  children: React.ReactNode
}

export default function Layout ({ children }: Props): JSX.Element {
  return (
      <>
        <Header />
        {children}
        <Footer/>
      </>
  )
}
