import React from 'react'
import './CurrentTemperature.scss'
import { Container } from 'react-bootstrap'
import { useAppSelector } from '../../../redux/hooks'
import { RootState } from '../../../types/types'

const CurrentTemperature = () => {
  const tempC = useAppSelector((state:RootState)=>state.weather.weather.current.tempC)
  

  return (
    <Container className='temperature'>
      <h1 className='temperature__figure'>{tempC}</h1>
        <span className='temperature__symbol'>
        °C
        </span>
    </Container>
  )
}

export default CurrentTemperature