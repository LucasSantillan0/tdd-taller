import { renderHook, act } from "@testing-library/react-hooks";
import useHome from "./use-home";
import { mockedAxios, gifExample } from "../../../setupTests";

describe("useHome hook", () => {
  test("Should ask for the gifs on start", async () => {
    mockedAxios.get.mockResolvedValue({ data: [gifExample, gifExample] });
    const { result, waitFor } = renderHook(() => useHome());
    await waitFor(() => {
      expect(result.current.gifs).toStrictEqual([gifExample, gifExample]);
    });
  });

  test("Should fetch the gifs again", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [gifExample] });
    const { result, waitFor } = renderHook(() => useHome());
    mockedAxios.get.mockResolvedValueOnce({
      data: [gifExample, gifExample, gifExample],
    });
    act(() => {
      result.current.submitGif("example");
    });
    expect(mockedAxios.post).toBeCalledTimes(1);
    await waitFor(() => {
      expect(result.current.gifs).toHaveLength(3);
    });
  });
  test("Should delete the gifs", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [gifExample, { ...gifExample, id: "2" }],
    });
    const { result, waitFor, waitForNextUpdate } = renderHook(() => useHome());
    await waitForNextUpdate();
    mockedAxios.delete.mockResolvedValue({});
    act(() => {
      result.current.deleteGif(gifExample);
    });
    expect(mockedAxios.delete).toBeCalledTimes(1);
    await waitFor(() => {
      expect(result.current.gifs).toHaveLength(1);
    });
  });
  test("Should not delete the gif if something wrong hanppened", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [gifExample, { ...gifExample, id: "2" }],
    });
    const { result, waitFor, waitForNextUpdate } = renderHook(() => useHome());
    await waitForNextUpdate();
    mockedAxios.delete.mockRejectedValue({});
    act(() => {
      result.current.deleteGif(gifExample);
    });
    expect(mockedAxios.delete).toBeCalledTimes(1);
    await waitFor(() => {
      expect(result.current.gifs).toHaveLength(1);
    });
    await waitFor(() => {
      expect(result.current.gifs).toHaveLength(2);
    });
  });
});
