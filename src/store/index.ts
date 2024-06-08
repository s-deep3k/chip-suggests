import {configureStore} from '@reduxjs/toolkit'
import { chipReducer } from '../features/chipSlice'
import { searchListReducer } from '../features/searchListSlice'

const store = configureStore({
    reducer: {chipReducer, searchListReducer}
})

export default store
export type AppDispatch = typeof store.dispatch