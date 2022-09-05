import { fireEvent, render, screen } from '@testing-library/react'

import React from 'react'

import ListButton from './ListButton'

describe('<ListButton/>', () => {
  it('renders ListButton Component', () => {
    render(<ListButton text="test1" link="/" />)
  })

  it('Is ListItem working', () => {
    render(
      <ListButton
        text="이용약관"
        link="https://www.naver.com/"
        icon="https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ=w240-h480-rw"
      />
    )

    const textElement = screen.getByText('이용약관')
    const iconElement = screen.getByText(
      'https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ=w240-h480-rw'
    )

    expect(textElement).toBeInTheDocument()
    fireEvent.click(textElement)

    expect(iconElement).toBeInTheDocument()
  })
})
