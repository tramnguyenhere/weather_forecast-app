import React from 'react'
import { Row,Col} from 'react-bootstrap'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import CurrentTemperature from '../CurrentTemperature/CurrentTemperature'
import CurrentDate from '../CurrentDate/CurrentDate'

function MainInfoCard() {
  return (
    <Col lg='7'>
      <Row><CurrentWeather /></Row>
      <Row><CurrentTemperature /></Row>
      <Row><CurrentDate /></Row>
    </Col>
  )
}

export default MainInfoCard