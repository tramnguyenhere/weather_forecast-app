import React from 'react'
import { Row,Col} from 'react-bootstrap'
import CurrentWeather from './CurrentWeather/CurrentWeather'
import CurrentTemperature from './CurrentTemperature/CurrentTemperature'
import CurrentDate from './CurrentDate/CurrentDate'
import WeatherInfoList from './WeatherInfoList/WeatherInfoList'
// import FutureWeatherList from './FutureWeatherList/FutureWeatherList'
import './MainInfoCard.scss'
import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../types/types'

function MainInfoCard() {
  const location = useAppSelector((state:RootState) => state.weather.location)
  return (
    <Col lg='7' className='main-info__wrapper'>
      <Row><CurrentWeather /></Row>
      <Row className='main-info--location'><Col lg='1'>{location}</Col></Row>
      <Row><CurrentTemperature /></Row>
      <Row><CurrentDate /></Row>
      <Row><WeatherInfoList /></Row>
      {/* <Row><FutureWeatherList /></Row> */} 
    </Col>
  )
}

export default MainInfoCard