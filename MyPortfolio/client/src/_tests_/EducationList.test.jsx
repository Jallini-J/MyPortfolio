import { render, screen } from "@testing-library/react";
import EducationList from "../components/EducationList";

test("renders education title", () => {
  render(<EducationList items={[]} />);
  expect(screen.getByText("Education")).toBeInTheDocument();
});
