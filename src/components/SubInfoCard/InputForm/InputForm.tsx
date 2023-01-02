import React from 'react'
import './InputForm.scss'
import { Button, Form} from 'react-bootstrap'
import { useAppDispatch } from '../../../redux/hooks'
import { setLocation } from '../../../redux/features/weatherSlice'

const InputForm = () => {
  const dispatch = useAppDispatch()
  
  const queryHandler = (e:any) => {
    e.preventDefault()
    dispatch(setLocation(e.target.searchQuery.value))
  }

  return (
    <Form className='search-bar' onSubmit={queryHandler}>
      <Form.Label className='search-bar__icon'>
        <i className="fa-solid fa-location-dot" />
      </Form.Label>
      <Form.Control className='search-bar__input' name='searchQuery' type="text" placeholder="Location" />
      <Button type='submit' className='search-bar__btn'>
        <i className="fa-solid fa-plus" />
      </Button>
    </Form>
  )
}

export default InputForm