import React from 'react'
import { Row,Col} from 'react-bootstrap'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import CurrentTemperature from '../CurrentTemperature/CurrentTemperature'

function MainInfoCard() {
  return (
    <Col lg='7'>
      <Row><CurrentWeather /></Row>
      <Row><CurrentTemperature /></Row>
    </Col>
  )
}

export default MainInfoCard