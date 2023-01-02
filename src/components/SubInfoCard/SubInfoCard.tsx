import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './SubInfoCard.scss'
import InputForm from './InputForm/InputForm'
import SunSchedule from './SunSchedule/SunSchedule'
import WeatherInfoList from './WeatherInfoList/WeatherInfoList'

const SubInfoCard = () => {
    return (
      <Col className='sub-info__wrapper' lg='5'>
        <Row>
          <InputForm />
        </Row>
        <Row>
          <Col lg='6'><SunSchedule /></Col>
          <Col lg='6'><SunSchedule /></Col>
        </Row>
        <Row className='sub-info__divider'></Row>
        <WeatherInfoList />
      </Col>
  )
}

export default SubInfoCard