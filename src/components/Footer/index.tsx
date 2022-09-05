import { Box, Container, Divider } from '@mui/material'

import React from 'react'
import Navigation from './Navigation'

export default function Footer (): JSX.Element {
  return (
    <Box component="footer" sx={{ background: '#eee', position: 'sticky' }}>
      <Divider />
      <Container sx={{ padding: 2 }}>
          <Navigation/>
      </Container>
    </Box>
  )
}
