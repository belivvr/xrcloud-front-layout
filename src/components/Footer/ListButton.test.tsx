import { render } from '@testing-library/react'

import React from 'react'

import ListButton from './ListButton'

describe('<ListButton/>', () => {
  it('renders ListButton Component', () => {
    render(<ListButton text="test1" link="/" />)
  })
})
