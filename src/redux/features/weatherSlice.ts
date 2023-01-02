import { createSlice } from '@reduxjs/toolkit';
import { WeatherData } from '../../types/types';

const initialState: WeatherData = {
  location: '',
  weather: {
    current: {
      tempC: 0,
      condition: '',
      wind: 0,
      humidity: 0,
      uv: 0,
      airQuality: 0
    }
  }
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather.current = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    }
  }
})

export const { setWeather, setLocation } = weatherSlice.actions;
export default weatherSlice.reducer