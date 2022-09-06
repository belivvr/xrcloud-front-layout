import { Box } from '@mui/material'

import React from 'react'

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
      {/* TO DO 분리 해야할 컴포넌트
      <HeaderLogo/>
      <ListItem/>
      <LoginButton/>
      <LanguageButton /> */}
    </Box>
  )
}
