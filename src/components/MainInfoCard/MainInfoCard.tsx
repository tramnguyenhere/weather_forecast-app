import React from 'react'
import { Row,Col} from 'react-bootstrap'
import CurrentWeather from './CurrentWeather/CurrentWeather'
import CurrentTemperature from './CurrentTemperature/CurrentTemperature'
import CurrentDate from './CurrentDate/CurrentDate'
import WeatherInfoList from './WeatherInfoList/WeatherInfoList'
import FutureWeatherList from './FutureWeatherList/FutureWeatherList'
import './MainInfoCard.scss'

function MainInfoCard() {
  return (
    <Col lg='7' className='main-info__wrapper'>
      <Row><CurrentWeather /></Row>
      <Row><CurrentTemperature /></Row>
      <Row><CurrentDate /></Row>
      <Row><WeatherInfoList /></Row>
      <Row><FutureWeatherList /></Row>
    </Col>
  )
}

export default MainInfoCard