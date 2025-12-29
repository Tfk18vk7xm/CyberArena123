// Theme reducer - Manages theme state in Redux store

const initialState = {
  theme: 'dark', // 'dark' or 'light'
  primaryColor: '#64b5f6',
  secondaryColor: '#0a1929',
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      }
    case 'SET_PRIMARY_COLOR':
      return {
        ...state,
        primaryColor: action.payload,
      }
    case 'SET_SECONDARY_COLOR':
      return {
        ...state,
        secondaryColor: action.payload,
      }
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
    default:
      return state
  }
}

export default themeReducer

