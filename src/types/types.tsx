import { store } from "../redux/store"

export interface WeatherData {
    location: string,
    weather: {
        current: {
            tempC: number,
            condition: string,
            wind: number,
            humidity: number,
            uv: number,
            airQuality: number
        }
    }
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch