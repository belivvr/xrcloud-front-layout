import { Box, Typography } from '@mui/material'

import React from 'react'

export default function HeaderLogo (): JSX.Element {
  return (
    <a href="/">
      <Box
        component="h1"
        sx={{ display: 'flex', alignItems: 'flex-end', padding: '8px' }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          XRCloud
        </Typography>
        <Typography variant="caption" sx={{ marginLeft: '8px' }}>
          powered by BELIVVR
        </Typography>
      </Box>
    </a>
  )
}
