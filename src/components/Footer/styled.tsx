import React from 'react'

import { Grid, List, ListItemButton } from '@mui/material'

interface ItemProps {
  children: React.ReactNode
  href?: string
}

interface ItemListProps {
  dense?: boolean
  children: React.ReactNode
}

export const Item = ({ children, href }: ItemProps): JSX.Element => (
  <ListItemButton
    rel="noreferrer"
    target="_blank"
    href={href}
    disableRipple
    disableTouchRipple
    component="a"
    sx={{ '&:hover': { background: 'none' } }}
  >
    {children}
  </ListItemButton>
)

export const ItemList = ({ dense = false, children }: ItemListProps): JSX.Element => (
  <Grid item md={4}>
    <List dense={dense}>{children}</List>
  </Grid>
)
