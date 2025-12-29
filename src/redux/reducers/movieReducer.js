// Movie reducer - Manages movie/game state in Redux store

const initialState = {
  movies: [],
  loading: false,
  error: null,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_START':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      }
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default movieReducer

