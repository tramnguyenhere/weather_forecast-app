import { store } from "../redux/store"


export interface WeatherDataType {
    location: string,
    astronomy: {
        sunrise: string,
        sunset: string
      },
    weather: {
        current: {
            tempC: number,
            condition: string,
            wind: number,
            humidity: number,
            uv: number,
            airQuality: number
        },
        
    }
}

export type conditionDataType = {
    imgSrc: string,
    name: string
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch