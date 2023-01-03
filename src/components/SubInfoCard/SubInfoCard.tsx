import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './SubInfoCard.scss'
import InputForm from './InputForm/InputForm'
import SunSchedule from './SunSchedule/SunSchedule'
import WeatherInfoList from './WeatherInfoList/WeatherInfoList'
import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../types/types'

const SubInfoCard = () => {
  const sunset = useAppSelector((state:RootState)=>state.weather.astronomy.sunset)
  const sunrise = useAppSelector((state:RootState)=>state.weather.astronomy.sunrise)

    
  return (
      <Col className='sub-info__wrapper' lg='5'>
        <Row>
          <InputForm />
        </Row>
        <Row className='sub-info--astro'>
          <SunSchedule time={sunrise} />
        </Row>
        <Row className='sub-info--astro'>
          <SunSchedule time={sunset} />
        </Row>
        <Row className='sub-info__divider'></Row>
        <WeatherInfoList />
      </Col>
  )
}

export default SubInfoCard