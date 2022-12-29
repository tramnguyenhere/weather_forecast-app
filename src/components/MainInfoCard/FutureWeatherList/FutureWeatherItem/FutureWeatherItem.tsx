import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './FutureWeatherItem.scss'

const FutureWeatherItem = () => {
  return (
      <Container className='future-weather'>
          <span className='future-weather__temperature'>25°C</span>
          <Image className='future-weather__icon' src='/assets/icons/3d weather icons/cloud/5.png' />
          <span className='future-weather__day'>Tue</span>
    </Container>
  )
}

export default FutureWeatherItem