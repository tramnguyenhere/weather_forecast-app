import React from 'react'
import './WeatherInfoList.scss'
import { Col, Container } from 'react-bootstrap'

const WeatherInfoList = () => {
  return (
    <Container className='weather-info__wrapper'>
          <Col className='weather-info__item' lg='6'>
            <span className='weather-info__item--header'>Humidity</span>
            <span className='weather-info__item--data'>38%</span>
          </Col>      
          <Col className='weather-info__item' lg='6'>
            <span className='weather-info__item--header'>Rain</span>
            <span className='weather-info__item--data'> 2%</span>
          </Col>      
          <Col className='weather-info__item' lg='6'>
            <span className='weather-info__item--header'>Air Quality</span>
            <span className='weather-info__item--data'>3/10</span>
            <span className='weather-info__item--desc'>Low</span>
          </Col>      
          <Col className='weather-info__item' lg='6'>
            <span className='weather-info__item--header'>Wind speed</span>
            <span className='weather-info__item--data'>3.8km/h</span>
          </Col>      
    </Container>
  )
}

export default WeatherInfoList