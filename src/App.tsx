import { useEffect } from 'react';

import MainInfoCard from './components/MainInfoCard/MainInfoCard';
import SubInfoCard from './components/SubInfoCard/SubInfoCard';
import { RootState } from './types/types';
import { useAppDispatch, useAppSelector } from './redux/hooks';

import { Container, Row } from 'react-bootstrap';
import './styles/App.scss';

import { setWeather } from './redux/features/weatherSlice';

const App = () => {
  const location = useAppSelector((state:RootState) =>state.weather.location)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=675f6536a788401598f195901230201&q=${location}&aqi=yes`)
        const data = await response.json()
        console.log(data);
        
        dispatch(setWeather(
          {
            tempC: data.current.temp_c,
            condition: data.current.condition.text,
            wind: data.current.wind_mph,
            humidity: data.current.humidity,
            uv: data.current.uv,
            airQuality: data.current.air_quality['us-epa-index']
          }
        ))
    
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [dispatch, location])

  return (
    <Container className='App'>
      <Row>
        <MainInfoCard />
        <SubInfoCard />
      </Row>
    </Container>
  );
}

export default App;
