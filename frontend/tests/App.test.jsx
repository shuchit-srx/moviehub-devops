import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import App from "../src/App";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("MovieHub frontend", () => {
  test("renders application title", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        movies: []
      })
    });

    render(<App />);

    expect(
      await screen.findByRole("heading", {
        name: "MovieHub"
      })
    ).toBeInTheDocument();
  });

  test("renders movies returned by API", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        movies: [
          {
            id: 1,
            title: "Inception",
            year: 2010,
            genre: "Sci-Fi"
          }
        ]
      })
    });

    render(<App />);

    expect(
      await screen.findByText("Inception")
    ).toBeInTheDocument();
  });

  test("displays API error", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(
      new Error("Network error")
    );

    render(<App />);

    expect(
      await screen.findByRole("alert")
    ).toHaveTextContent(
      "Unable to load movies."
    );
  });
});