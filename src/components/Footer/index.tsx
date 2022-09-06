import React from 'react'

import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  ListItemIcon
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import ForumIcon from '@mui/icons-material/Forum'

import { Item, ItemList } from './styled'

export default function Footer (): JSX.Element {
  return (
    <Box component="footer" sx={{ background: '#eee', position: 'sticky' }}>
      <Divider />
      <Container sx={{ padding: 2 }}>
        <Grid container columns={{ md: 12 }} spacing={{ md: 4 }}>
          <ItemList>
            {/* TODO: 필요한 url 넣기 */}
            <Item href="/">이용약관</Item>
            <Item href="/">개인정보처리방침</Item>
            <Item href="/">회사 정보</Item>
          </ItemList>
          <ItemList dense>
            <Item href="https://www.facebook.com/groups/webxrko">
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              WebXR Korea
            </Item>
            <Item href="https://github.com/belivvr">
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              Belivvr Github
            </Item>
          </ItemList>
          <ItemList>
            <Item href="https://about.belivvr.com">회사 소개</Item>
            <Item href="mailto:connect@belivvr.com">문의하기</Item>
          </ItemList>
        </Grid>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ padding: 1 }}>
          사업자 등록번호 846-88-00665 | 통신판매업 신고번호 제 2020-전남순천-2995 호
          <br />
          전남 순천시 우석로 7, 청암대학교 청암건강교육센터 3층, (주)빌리버 | 대표번호 070-4227-9371
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            padding: 1
          }}
        >
          © BELIVVR All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  )
}
