import React from 'react'

import { Col, Row } from 'react-bootstrap'
import './WeatherInfoList.scss'
import { useAppSelector } from '../../../redux/hooks'
import { RootState } from '../../../types/types'

const WeatherInfoList = () => {
  const windData = useAppSelector((state:RootState)=>state.weather!.weather.current).wind
  const humData = useAppSelector((state:RootState)=>state.weather!.weather.current).humidity
  const uvData = useAppSelector((state:RootState)=>state.weather!.weather.current).uv
  
  return (
    <Row className='weather-info__wrapper'>
      <Col className='weather-info' id='wind' lg='4'>
        <i className="fa-solid fa-wind"></i>
        <span>Wind</span>
        <span>{windData} mph</span>
      </Col>      
      <Col className='weather-info' id='humidity' lg='4'>
      <i className="fa-solid fa-droplet"></i>
        <span>Hum</span>
        <span>{humData}%</span>
      </Col>      
      <Col className='weather-info' id='rain' lg='4'>
      <i className="fa-solid fa-sun"></i>
        <span>UV</span>
        <span>{uvData}</span>
      </Col>      
    </Row>
  )
}

export default WeatherInfoList