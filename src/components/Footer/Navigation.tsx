import { Grid, List } from '@mui/material'

import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub'
import ForumIcon from '@mui/icons-material/Forum'

import ListButton from './ListButton'

export default function Navigation (): JSX.Element {
  return (
    <Grid container columns={{ md: 12 }} spacing={{ md: 4 }}>
      <Grid item md={4}>
        <List>
          <ListButton text="이용약관" link="/" />
          <ListButton text="개인정보처리방침" link="/" />
          <ListButton text="회사 정보" link="/" />
        </List>
      </Grid>
      <Grid item md={4}>
        <List dense>
          <ListButton
            text="WebXRCloud"
            link="https://www.facebook.com/groups/webxrko"
            icon={<ForumIcon />}
          />
          <ListButton
            text="Belivvr Github"
            link="https://github.com/belivvr"
            icon={<GitHubIcon />}
          />
        </List>
      </Grid>
      <Grid item md={4}>
        <List>
          <ListButton text="회사 소개" link="https://about.belivvr.com" />
          <ListButton text="문의하기" link="mailto:connect@belivvr.com" />
        </List>
      </Grid>
    </Grid>
  )
}
