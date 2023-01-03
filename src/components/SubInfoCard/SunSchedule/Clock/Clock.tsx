import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Clock.scss'

const Clock = ({time}:any) => {

  return (
      <Container className='clock'>
        <Row className='digital-clock__wrapper'>
            {time}
        </Row>
    </Container>
  )
}

export default Clock