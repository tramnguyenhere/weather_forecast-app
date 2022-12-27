import React from 'react'
import './CurrentTemperature.scss'
import { Container } from 'react-bootstrap'

const CurrentTemperature = () => {
  return (
    <Container className='temperature'>
        <h1 className='temperature__figure'>26</h1>
        <span className='temperature__symbol'>
        °C
        </span>
    </Container>
  )
}

export default CurrentTemperature