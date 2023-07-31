import { render, screen, waitFor } from "@testing-library/react";
import { APIRequest } from "./APIRequest";

it("displays the list of pokemons", async () => {
  render(<APIRequest />);

  expect(screen.getByText("Fetching pokemons...")).toBeInTheDocument();

  await waitFor(() => {
    expect(
      screen.queryByLabelText("Fetching pokemons...")
    ).not.toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
  });

  expect(screen.getByRole("heading", { name: /API request/ })).toBeVisible();
});
