import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './CurrentDate.scss'
import { dayOfWeekConverter, fullDateConverter, timeConverter } from '../../../utils/dateUtils'

const CurrentDate = () => {
  
    const date = fullDateConverter(new Date())
    const dayOfWeek = dayOfWeekConverter(new Date())
    const localizedTime = timeConverter(new Date())

  return (
      <Container className='date__container'>
          <Row className='date'>
              <Col>{date}</Col>
          </Row>
        <Row className='day-time'>
            <Col className='day' lg='3'>{dayOfWeek}</Col>
            <Col className='time' lg='8'>{localizedTime}</Col>
        </Row>
    </Container>
  )
}

export default CurrentDate