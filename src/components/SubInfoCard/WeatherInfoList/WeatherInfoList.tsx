import React from 'react'
import './WeatherInfoList.scss'
import { Col, Container } from 'react-bootstrap'
import { RootState } from '../../../types/types'
import { useAppSelector } from '../../../redux/hooks'
import { airQualityDesc, windSpeedDesc } from '../../../utils/weatherUtils'

const WeatherInfoList = () => {
    const windData = useAppSelector((state:RootState)=>state.weather!.weather.current).wind
    const humData = useAppSelector((state:RootState)=>state.weather!.weather.current).humidity
    const uvData = useAppSelector((state:RootState)=>state.weather!.weather.current).uv
    const airQualityData = useAppSelector((state:RootState)=>state.weather!.weather.current).airQuality

  return (
    <Container className='weather-info__wrapper'>
          <Col className='weather-info__item' lg='6'>
            <span className='weather-info__item--header'>Humidity</span>
        <span className='weather-info__item--data'>{humData}%</span>
          </Col>      
          <Col className='weather-info__item' lg='6'>
            <span className='weather-info__item--header'>UV Index</span>
        <span className='weather-info__item--data'>{uvData}</span>
          </Col>      
          <Col className='weather-info__item' lg='6'>
            <span className='weather-info__item--header'>Air Quality</span>
            <span className='weather-info__item--data'>{airQualityData}/5</span>
            <span className='weather-info__item--desc'>{airQualityDesc(airQualityData)}</span>
          </Col>      
          <Col className='weather-info__item' lg='6'>
            <span className='weather-info__item--header'>Wind speed</span>
        <span className='weather-info__item--data'>{windData} mph</span>
        <span className='weather-info__item--desc'>{windSpeedDesc(windData)}</span>
          </Col>      
    </Container>
  )
}

export default WeatherInfoList