import { ListItemButton, ListItemIcon } from '@mui/material'

import React from 'react'

interface Props {
  text: string
  link: string
  icon?: React.ReactNode
}

export default function ListButton ({ text, link, icon }: Props): JSX.Element {
  return (
    <ListItemButton
      href={link}
      target="_blank"
      rel="noreferrer"
      disableRipple
      disableTouchRipple
      sx={{ '&:hover': { background: 'none' } }}
    >
      {icon != null ? <ListItemIcon>{icon}</ListItemIcon> : null}
      {text}
    </ListItemButton>
  )
}
