import React from "react";
import { render, screen } from "@testing-library/react";
import EducationList from "../education/educationlist";

// Mock the API used by the component to avoid network calls
jest.mock("../api", () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
  delete: jest.fn(() => Promise.resolve({}))
}));

beforeEach(() => {
  // Provide a minimal user in localStorage so component can read role
  localStorage.setItem("user", JSON.stringify({ role: "admin" }));
});

test("renders education title", async () => {
  render(<EducationList />);
  expect(await screen.findByText("Education")).toBeInTheDocument();
});
