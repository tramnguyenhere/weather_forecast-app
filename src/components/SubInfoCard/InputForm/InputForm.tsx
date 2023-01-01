import React from 'react'
import './InputForm.scss'
import { Button, Form, InputGroup} from 'react-bootstrap'

const InputForm = () => {
  return (
    <InputGroup className='search-bar'>
        <Form.Label className='search-bar__icon'>
        <i className="fa-solid fa-location-dot"></i>
        </Form.Label>
        <Form.Control className='search-bar__input' type="text" placeholder="Location" />
       <Button className='search-bar__btn'><i className="fa-solid fa-plus"></i></Button>
    </InputGroup>
  )
}

export default InputForm