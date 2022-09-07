import React from 'react'

import { List, ListItemText, Link } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'

export default function ListItem (): JSX.Element {
  const listItem = [
    {
      text: '내 프로젝트',
      path: 'projects'
    },
    {
      text: '제품',
      path: 'products'
    },
    {
      text: '문서',
      path: 'documents'
    },
    {
      text: '포럼',
      path: 'https://www.facebook.com/groups/webxrko'
    }
  ]

  return (
    <List
      sx={{
        marginLeft: 'auto',
        display: 'flex'
      }}
    >
      {listItem.map((item) => (
        <ListItemText key={item.text} sx={{ padding: '8px', margin: '8px' }}>
          {item.text === '포럼'
            ? (
            <a
              href={item.path}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#000' }}
            >
              {item.text}
            </a>
              )
            : (
            <Link
              component={RouterLink}
              to={item.path}
              variant="body1"
              underline="none"
              sx={{ color: '#000' }}
            >
              {item.text}
            </Link>
              )}
        </ListItemText>
      ))}
    </List>
  )
}
