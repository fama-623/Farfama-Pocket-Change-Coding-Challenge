import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  test("submits the search query when the button is clicked", () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByPlaceholderText } = render(
      <SearchForm onSubmit={handleSubmit} />
    );

    const queryInput = getByPlaceholderText("Search...");
    const searchButton = getByLabelText("Submit search");

    fireEvent.change(queryInput, { target: { value: "Harry Potter" } });
    fireEvent.click(searchButton);

    expect(handleSubmit).toHaveBeenCalledWith("Harry Potter");
  });
});
