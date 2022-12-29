import React from 'react'

import { Col, Row } from 'react-bootstrap'
import './WeatherInfoList.scss'

const WeatherInfoList = () => {
  return (
    <Row className='weather-info__wrapper'>
      <Col className='weather-info' id='wind' lg='4'>
        <i className="fa-solid fa-wind"></i>
        <span>Wind</span>
        <span>10 km/h</span>
      </Col>      
      <Col className='weather-info' id='humidity' lg='4'>
      <i className="fa-solid fa-droplet"></i>
        <span>Hum</span>
        <span>54%</span>
      </Col>      
      <Col className='weather-info' id='rain' lg='4'>
      <i className="fa-solid fa-cloud-rain"></i>
        <span>Rain</span>
        <span>0.2%</span>
      </Col>      
    </Row>
  )
}

export default WeatherInfoList