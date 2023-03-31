import { Action } from 'redux';
import { SearchResultItem } from '../api';

type FavoritesState = {
  items: SearchResultItem[];
};

const initialState: FavoritesState = {
  items: [],
};

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

type AddFavoriteAction = Action<typeof ADD_FAVORITE> & {
  payload: SearchResultItem;
};

type RemoveFavoriteAction = Action<typeof REMOVE_FAVORITE> & {
  payload: string;
};

export const addFavorite = (movie: SearchResultItem): AddFavoriteAction => ({
  type: ADD_FAVORITE,
  payload: movie,
});

export const removeFavorite = (imdbID: string): RemoveFavoriteAction => ({
  type: REMOVE_FAVORITE,
  payload: imdbID,
});

export const favoritesReducer = (
  state: FavoritesState = initialState,
  action: AddFavoriteAction | RemoveFavoriteAction,
): FavoritesState => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        items: state.items.filter(item => item.imdbID !== action.payload),
      };
    default:
      return state;
  }
};
