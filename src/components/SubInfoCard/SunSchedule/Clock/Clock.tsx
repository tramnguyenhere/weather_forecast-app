import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Clock.scss'

const Clock = () => {


  return (
      <Container className='clock'>
        <Row className="clock__wrapper">
            <span className="clock__hour"></span>
            <span className="clock__minute"></span>
            <span className="clock__second"></span>
            <span className="clock__dot"></span>
        </Row>
    </Container>
  )
}

export default Clock