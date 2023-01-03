import { createSlice } from '@reduxjs/toolkit';
import { WeatherDataType } from '../../types/types';

const initialState: WeatherDataType = {
  location: 'Helsinki',
  astronomy: {
    sunrise: '',
    sunset: ''
  },
  weather: {
    current: {
      tempC: 0,
      condition: '',
      wind: 0,
      humidity: 0,
      uv: 0,
      airQuality: 0
    },
  }
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setAstronomy: (state, action) => {
      state.astronomy = action.payload
    },
    setWeather: (state, action) => {
      state.weather.current = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    },
  }
})

export const { setWeather, setLocation, setAstronomy } = weatherSlice.actions;
export default weatherSlice.reducer

