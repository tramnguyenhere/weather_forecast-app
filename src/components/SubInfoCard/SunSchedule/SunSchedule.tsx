import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import Clock from './Clock/Clock'
import './SunSchedule.scss'

const SunSchedule = () => {
  return (
      <Container className='sun-schedule'>
          <Row className='sun-schedule__header'>Sunrise</Row>
          <Container className='sun-schedule__main'>
            <Clock />
            <Row className='sun-schedule__icon'>
                <Image src='/assets/icons/sunrise.png'/>
            </Row> 
          </Container> 
      </Container>
  )
}

export default SunSchedule