import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/hot reload/i);
  expect(linkElement).toBeInTheDocument();
});

// test("2", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/react/i);
//   expect(linkElement).toBeInTheDocument();
// });
