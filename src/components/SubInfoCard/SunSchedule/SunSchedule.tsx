import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import Clock from './Clock/Clock'
import './SunSchedule.scss'

const SunSchedule = ({time}: any) => {
  const header = (time: any) => {
    if (time.includes('AM')) {
      return 'Sunrise'
    } return 'Sunset'
  }
  return (
      <Container className='sun-schedule'>
      <Row className='sun-schedule__header'>{header(time)} </Row>
          <Container className='sun-schedule__main'>
        <Clock time={time} />
            <Row className='sun-schedule__icon'>
                <Image src='/assets/icons/sunrise.png'/>
            </Row> 
          </Container> 
      </Container>
  )
}

export default SunSchedule