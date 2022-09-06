import { Box } from '@mui/material'

import React from 'react'

import HeaderLogo from './HeaderLogo'

export default function Header (): JSX.Element {
  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        top: 0,
        left: 0,
        paddingX: '16px',
        borderBottom: '1px solid lightgray',
        boxSizing: 'border-box',
        background: 'white',
        zIndex: 100
      }}
    >
      <HeaderLogo/>
      {/* TODO: Header에 필요한 컴포넌트들을 분리 할 것.
      <ListItem/>
      <LoginButton/>
      <LanguageButton /> */}
    </Box>
  )
}
