const request = require("supertest");

const app = require("../src/app");

describe("MovieHub API", () => {
  describe("GET /health", () => {
    test("should return healthy status", async () => {
      const response = await request(app)
        .get("/health");

      expect(response.statusCode).toBe(200);
      expect(response.body.status).toBe("healthy");
    });
  });

  describe("GET /api/movies", () => {
    test("should return movie list", async () => {
      const response = await request(app)
        .get("/api/movies");

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.movies)).toBe(true);
      expect(response.body.movies.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/movies/:id", () => {
    test("should return a movie by id", async () => {
      const response = await request(app)
        .get("/api/movies/1");

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.movie.id).toBe(1);
    });

    test("should return 404 for a missing movie", async () => {
      const response = await request(app)
        .get("/api/movies/999");

      expect(response.statusCode).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });
});