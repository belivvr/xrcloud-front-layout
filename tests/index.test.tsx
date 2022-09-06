import React from 'react'
import { render } from '@testing-library/react'

import Layout from '../src'
import { MemoryRouter } from 'react-router-dom'

test('Layout', () => {
  render(
  <MemoryRouter>
    <Layout>text</Layout>
  </MemoryRouter>
  )
})
