import React from 'react'
import GlobalStyles from '../components/global/styles'
import Header from '../components/global/header'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  )
}

export default Layout
