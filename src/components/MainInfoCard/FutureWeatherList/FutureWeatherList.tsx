import React from 'react'
import FutureWeatherItem from './FutureWeatherItem/FutureWeatherItem'
import { Col, Row } from 'react-bootstrap'
import './FutureWeatherList.scss'

const FutureWeatherList = () => {
  return (
      <Row className='future-weather__list'>
        <Col lg='3'><FutureWeatherItem /></Col>
        <Col lg='3'><FutureWeatherItem /></Col>
        <Col lg='3'><FutureWeatherItem /></Col>
        <Col lg='3'><FutureWeatherItem /></Col>
      </Row>
  )
}

export default FutureWeatherList