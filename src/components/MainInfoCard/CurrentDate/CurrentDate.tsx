import React from 'react'
import format from 'date-fns/format'
import { Container, Row, Col } from 'react-bootstrap'
import './CurrentDate.scss'

const CurrentDate = () => {
    const date = format(new Date(), 'do MMM yy')
    const dayOfWeek = format(new Date(), 'eeee')
    const localizedTime = format(new Date(), 'p')

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