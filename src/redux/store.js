// Redux store configuration
// Combines all reducers and creates the Redux store

import { createStore, combineReducers } from 'redux'
import movieReducer from './reducers/movieReducer'
import themeReducer from './reducers/themeReducer'

// Combine all reducers
const rootReducer = combineReducers({
  movies: movieReducer,
  theme: themeReducer,
})

// Create and export the store
const store = createStore(rootReducer)

export default store

