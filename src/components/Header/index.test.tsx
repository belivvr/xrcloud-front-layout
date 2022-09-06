import { render } from '@testing-library/react'

import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Header from '.'

describe('<Header/>', () => {
  it('renders Header Component', () => {
    render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    )
  })
})
