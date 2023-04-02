import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { addFavorite, removeFavorite, selectFavorites } from "../reducers/favoritesReducer";

jest.mock("react-redux");

describe("MovieCard component", () => {
  const movie = {
    Title: "The Shawshank Redemption",
    Year: "1994",
    imdbID: "tt0111161",
    Type: "movie",
    Poster: "https://via.placeholder.com/300x400",
  };

  const dispatchMock = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(dispatchMock);
    (useSelector as jest.Mock).mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the movie poster and details correctly", () => {
    const { getByAltText, getByText } = render(<MovieCard movie={movie} />);
    expect(getByAltText(`Poster for ${movie.Title}`)).toBeInTheDocument();
    expect(getByText(movie.Title)).toBeInTheDocument();
    expect(getByText(`Year: ${movie.Year}`)).toBeInTheDocument();
    expect(getByText("Favorite")).toBeInTheDocument();
  });

  test("dispatches the addFavorite action when the Favorite button is clicked", () => {
    (useSelector as jest.Mock).mockReturnValueOnce([]);
    const { getByText } = render(<MovieCard movie={movie} />);
    const favoriteButton = getByText("Favorite");
    fireEvent.click(favoriteButton);
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(addFavorite(movie));
  });

  test("dispatches the removeFavorite action when the Remove from Favorite button is clicked", () => {
    (useSelector as jest.Mock).mockReturnValueOnce([{ ...movie }]);
    const { getByText } = render(<MovieCard movie={movie} />);
    const removeButton = getByText("Remove from Favorite");
    fireEvent.click(removeButton);
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(removeFavorite(movie.imdbID));
  });
});
