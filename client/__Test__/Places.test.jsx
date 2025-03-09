import { describe, it, expect, vi } from "vitest";
import Places from "../src/utils/Places";

describe("Places.search", () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    global.fetch = mockFetch;
  });

  it("should return places when API call is successful", async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({
        results: [
          {
            id: "1",
            name: "Place 1",
            formatted_address: "Address 1",
            price_level: 2,
            rating: 4.5,
            icon: "icon_url_1",
          },
        ],
      }),
    };
    mockFetch.mockResolvedValue(mockResponse);

    const result = await Places.search("Tacos", "Bellingham", "restaurant");
    expect(result).toEqual([
      {
        id: "1",
        name: "Place 1",
        address: "Address 1",
        priceLevel: 2,
        rating: 4.5,
        icon: "icon_url_1",
      },
    ]);
  });

  it("should return an empty array when API call returns no results", async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({ results: [] }),
    };
    mockFetch.mockResolvedValue(mockResponse);

    const result = await Places.search("Tacos", "Bellingham", "restaurant");
    expect(result).toEqual([]);
  });

  it("should return an empty array when API call fails", async () => {
    mockFetch.mockResolvedValue({ ok: false });

    const result = await Places.search("Tacos", "Bellingham", "restaurant");
    expect(result).toEqual([]);
  });
});