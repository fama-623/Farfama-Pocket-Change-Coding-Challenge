import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchResultItem } from '../api';

interface FavoritesState {
  items: SearchResultItem[];
}

const initialState: FavoritesState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<SearchResultItem>) => {
      const movie = action.payload;
      if (!state.items.some((item) => item.imdbID === movie.imdbID)) {
        state.items.push(movie);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      const imdbID = action.payload;
      state.items = state.items.filter((item) => item.imdbID !== imdbID);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state: { favorites: FavoritesState }) => state.favorites.items;

export default favoritesSlice.reducer;
