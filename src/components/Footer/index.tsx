import { Box, Container, Divider, Grid, List, Typography } from '@mui/material'

import React from 'react'

import ListButton from './ListButton'

import GitHubIcon from '@mui/icons-material/GitHub'
import ForumIcon from '@mui/icons-material/Forum'

export default function Footer (): JSX.Element {
  return (
    <Box component="footer" sx={{ background: '#eee', position: 'sticky' }}>
      <Divider />
      <Container sx={{ padding: 2 }}>
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
        <Typography variant="body2" align="center" color="text.secondary" sx={{ p: 1 }}>
          사업자 등록번호 846-88-00665 | 통신판매업 신고번호 제 2020-전남순천-2995 호
          <br />
          전남 순천시 우석로 7, 청암대학교 청암건강교육센터 3층, (주)빌리버 | 대표번호 070-4227-9371
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            p: 1
          }}
        >
          © BELIVVR All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  )
}
