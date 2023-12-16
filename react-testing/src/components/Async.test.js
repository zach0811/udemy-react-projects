import { render, screen } from "@testing-library/react";
import AsyncTest from "./Async.js";

describe("AsyncTest", () => {
  test("renders post if test succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<AsyncTest />);
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
