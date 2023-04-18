import { act, render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import App from "./app";
import { gifExample, mockedAxios } from "./setupTests";

describe("App component", () => {
  test("Should show the warning component when it does not have images", async () => {
    mockedAxios.get.mockResolvedValue({ data: [] });
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/No posee gifs/i)).toBeVisible();
    });
  });
  test("Should show the images", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [gifExample, gifExample, gifExample],
    });
    render(<App />);
    await waitFor(() => {
      expect(screen.getAllByRole("article")).toHaveLength(3);
    });
  });
  test("Should add images", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [],
    });
    render(<App />);
    mockedAxios.get.mockResolvedValue({
      data: [gifExample],
    });
    await UserEvent.type(screen.getByRole("textbox"), "test_url");
    await UserEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(screen.getAllByRole("article")).toHaveLength(1);
    });
  });
  test("Should delete the images", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [gifExample],
    });
    mockedAxios.delete.mockResolvedValue({});
    render(<App />);
    await UserEvent.click(await screen.findByAltText("showDelete-1"));
    await UserEvent.click(screen.getByText(/Eliminar/i));
    await waitFor(() => {
      expect(screen.queryAllByRole("article")).toHaveLength(0);
    });
  });
});
