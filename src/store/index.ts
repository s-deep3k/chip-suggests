import {configureStore} from '@reduxjs/toolkit'
import { chipReducer } from '../features/chipSlice'

const store = configureStore({
    reducer: {chipReducer}
})

export default store
export type AppDispatch = typeof store.dispatch