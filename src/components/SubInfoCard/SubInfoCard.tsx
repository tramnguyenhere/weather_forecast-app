import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './SubInfoCard.scss'
import InputForm from './InputForm/InputForm'

const SubInfoCard = () => {
    return (
      <Col className='sub-info__wrapper' lg='5'>
        <Row><InputForm /></Row>
      </Col>
  )
}

export default SubInfoCard