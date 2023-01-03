import React from 'react'
import { Image} from 'react-bootstrap'
import './CurrentWeather.scss'
import { useAppSelector } from '../../../redux/hooks'
import { RootState } from '../../../types/types'
import { conditionData } from '../../../data/conditionData'

const CurrentWeather = () => {
  const condition = useAppSelector((state: RootState) => state.weather.weather.current.condition).toLowerCase();
  const conditionIconCode = conditionData.find(item=>item.name===condition)?.imgSrc

  
  return (
     <Image className='current-weather__icon' src={`/assets/icons/${conditionIconCode}.png`} />
  )
}

export default CurrentWeather