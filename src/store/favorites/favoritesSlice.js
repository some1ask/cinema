import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state,action) => {
        return {...state,favorites:[...state.favorites,action.payload]}
    },
    deleteFavorite: (state,action) => {
        return {...state,favorites: state.favorites.filter(element => element.id !== action.payload.id)}
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavorite, deleteFavorite, incrementByAmount } = favoritesSlice.actions

export default favoritesSlice.reducer