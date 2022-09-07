import React from 'react'

import { Button } from '@mui/material'

export default function Loginbutton (): JSX.Element {
  return (
    <div>
        <Button
          href="/login"
          data-testid="uesr-name"
          sx={{ marginLeft: '8px' }}
        >
          로그인
        </Button>
    </div>
  )
}
