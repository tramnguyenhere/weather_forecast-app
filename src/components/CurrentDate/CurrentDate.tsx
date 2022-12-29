import React from 'react'
import format from 'date-fns/format'
import { Container, Row, Col } from 'react-bootstrap'

const CurrentDate = () => {
    const date = format(new Date(), 'do MMM yy')
    const dayOfWeek = format(new Date(), 'eeee')
    const localizedTime = format(new Date(), 'p')
    console.log(dayOfWeek);
    
    
    
  return (
      <Container>
        <Row>{date}</Row>
        <Row>
            <Col lg='2'>{dayOfWeek}</Col>
            <Col>{localizedTime}</Col>
        </Row>
    </Container>
  )
}

export default CurrentDate