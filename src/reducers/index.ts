import { combineReducers } from 'redux';
import { favoritesReducer } from './favoritesReducer';

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;